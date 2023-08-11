import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css'],
})
export class AttrDirectiveComponent {
  isCenter = false;
  isFade = false;
  currentStyle: Record<string, string> = {
    opacity: '0',
    transition: 'all 2s ease-out',
  };
  userName = '';

  languages = [
    {
      title: 'Angular',
      content:
        "Angular is a popular open-source framework for building dynamic web applications. It's developed and maintained by Google and a community of developers.",
      url: 'angular.png',
    },
    {
      title: 'React',
      content:
        "React is a widely-used open-source JavaScript library for building user interfaces, particularly for web applications. It's maintained by Facebook and a community of developers. ",
      url: 'react.png',
    },
    {
      title: 'Vue',
      content:
        "Vue.js, commonly referred to as Vue, is a progressive JavaScript framework for building user interfaces. It's designed to be approachable and versatile, making it suitable for both small-scale projects and larger applications. ",
      url: 'vue.png',
    },
  ];
}
