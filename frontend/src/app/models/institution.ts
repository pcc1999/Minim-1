'use strict';

export class Institution {
  name: String;
  description: String;
  url: String;
  responsable: String;

  constructor(name = '', url = '', responsable = '', description = '') {
    this.name = name;
    this.url = url;
    this.description = description;
    this.responsable = responsable;
  }
}