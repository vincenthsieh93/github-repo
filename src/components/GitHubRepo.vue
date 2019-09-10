<template>
  <div class="container">
    <h1>My GitHub Repositories</h1>
    <ul id="infinite" class="repo">
      <li class="repo__item" v-for="repo in repos" :key="repo.id">
        <div class="repo__block">
          <h2 class="repo__title">Title:</h2>
          <p class="repo__content">{{ repo.name }}</p>
        </div>
        <div class="repo__block">
          <h2 class="repo__title">Description:</h2>
          <p class="repo__content">{{ repo.description }}</p>
        </div>
        <div class="repo__block">
          <h2 class="repo__title">Url:</h2>
          <a :href="getRepoLink(repo.html_url)" target="_blank">{{
            repo.html_url
          }}</a>
        </div>
      </li>
      <li class="repo__item" v-if="repos.length < allRepos.length">
        <p class="repo__tips">Load more...</p>
      </li>
      <li class="repo__item" v-else>
        <p class="repo__tips">No more repositories</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { setTimeout } from "timers";

export default {
  name: "GitHubRepo",
  data() {
    return {
      isLoading: false,
      allRepos: [],
      count: 3,
      repos: []
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/vincenthsieh93/repos")
      .then(res => {
        this.allRepos = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  mounted() {
    const repoEl = document.querySelector("#infinite");

    repoEl.addEventListener("scroll", () => {
      if (
        repoEl.scrollTop + repoEl.clientHeight >= repoEl.scrollHeight &&
        this.repos.length < this.allRepos.length
      ) {
        this.loadRepo();
      }
    });

    this.loadRepo();
  },
  methods: {
    loadRepo() {
      this.isLoading = true;
      setTimeout(() => {
        for (let i = this.repos.length; i < this.count; i++) {
          this.repos.push(this.allRepos[i]);
        }

        this.count += 3;
        this.isLoading = false;
      }, 1000);
    },
    getRepoLink(link) {
      return link;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 256px);

  > h1 {
    font-size: 20px;
    padding: 20px 0;
    color: rgba(125, 33, 25, 1);
  }
}
.repo {
  width: 600px;
  height: 25vh;
  border: 2px solid rgba(200, 200, 200, 1);
  border-radius: 6px;
  overflow: auto;

  &__item {
    display: block;
    padding: 0 10px;
    border-bottom: 2px solid rgba(200, 200, 200, 1);

    &:last-child {
      border: 0;
    }
  }

  &__block {
    display: flex;
    padding: 5px 0;
    text-align: left;
  }

  &__title {
    padding-right: 10px;
  }

  &__content {
    color: cadetblue;
  }

  &__tips {
    padding: 10px 0;
  }
}
</style>
