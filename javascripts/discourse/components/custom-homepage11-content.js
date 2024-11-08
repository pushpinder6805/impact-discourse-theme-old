import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomHomepageContent extends Component {
  @service router;

  get isCustomHomepage() {
    const { currentURL } = this.router;
    const customPath = '/c/calculator/67';
    console.log("Current URL:", currentURL);  // Debugging: Check the URL
    return currentURL === customPath;
  }
}

