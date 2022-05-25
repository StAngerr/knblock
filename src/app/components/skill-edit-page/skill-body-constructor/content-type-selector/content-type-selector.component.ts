import { Component, OnInit } from '@angular/core';
import { ContentTypeRenderObject } from '../../../../types/skill';

@Component({
  selector: 'app-content-type-selector',
  templateUrl: './content-type-selector.component.html',
  styleUrls: ['./content-type-selector.component.scss'],
})
export class ContentTypeSelectorComponent implements OnInit {
  contentSectionsTypes: ContentTypeRenderObject[] = [
    {
      label: 'Text',
      type: 'TEXT',
      iconName: 'heading',
    },
    {
      label: 'Image and text',
      type: 'IMAGE_TEXT',
      iconName: 'id-card',
    },
    {
      label: 'Video',
      type: 'VIDEO',
      iconName: 'play',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
