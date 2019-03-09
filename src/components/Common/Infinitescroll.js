import React, { Component } from "react";
import axios from "axios";

import config from "../../config/Food2Fork";
import Recipes from "./recipes";

class Infinitescroll extends Component {
  state = {
    data: [],
    count: 30,
    page: 1,
    scrolling: false,
    totalPages: 15
  };

  componentWillMount() {
    this.loadRecipe();
    this.scrollListerner = window.addEventListener("scroll", e => {
      this.handelScroll(e);
    });
  }

  handelScroll = e => {
    const { scrolling, page, totalPages } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastLi = document.querySelector("ul.recpies > li:last-child");
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  };

  loadRecipe = () => {
    const { count, page, data } = this.state;
    const endpoint = `https://www.food2fork.com/api/search?key=${
      config.key
    }&page=${page}&count=${count}`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState(() => ({
          data: [...data, ...res.data.recipes],
          scrolling: false
        }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  loadMore = () => {
    this.setState(
      preState => ({
        page: preState.page + 1,
        scrolling: true
      }),
      () => {
        this.loadRecipe();
      }
    );
  };

  render() {
    return (
      <div>
        <ul style={{ display: "inline" }} className="recpies">
          {this.state.data.map(recipe => {
            return (
              <li key={recipe.recipe_id}>
                <Recipes {...recipe} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Infinitescroll;
