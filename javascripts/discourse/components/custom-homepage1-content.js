import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomHomepage1Content extends Component {
  @service router;

  get isCustomHomepage1() {
    const { currentURL } = this.router;
    const customPath = 'c/free-educational-videos/20/none';
    console.log("Current URL:", currentURL);  // Debugging: Check the URL
    return currentURL === customPath;
  }
}

