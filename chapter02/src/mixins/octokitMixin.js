//import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
export const octokitMixin = {
  methods: {
    createOctokitClient() {
      return new window.Octokit({
        auth: localStorage.getItem("github-token"),
      });
    }
  }
}