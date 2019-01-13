import {inject, TestBed} from '@angular/core/testing';
import {FormsService} from './forms.service';
import {TextBoxElement} from '../model/textbox-element';
import {DropDownElement} from '../model/dropdown-element';

const mockData = [
  new TextBoxElement(
    {
      controlType: 'textbox',
      key: 'firstname',
      label: 'First Name',
      order: 1,
      required: true,
      type: 'text',
      value: undefined
    }
  ),
  new TextBoxElement(
    {
      controlType: 'textbox',
      key: 'email',
      label: 'Email',
      order: 2,
      required: true,
      type: 'email',
      value: undefined
    }
  ),
  new TextBoxElement(
    {
      controlType: 'textbox',
      key: 'date',
      label: 'Date',
      order: 3,
      required: true,
      type: 'date',
      value: undefined
    }
  ),
  new DropDownElement(
    {
      controlType: 'dropdown',
      key: 'skill',
      label: 'Skill',
      options: [
        {key: '1', value: 'JS'},
        {key: '2', value: 'Java'},
        {key: '3', value: 'NodeJs'}
      ],
      order: 4,
      required: false,
      value: undefined
    }
  )
];

describe('FormsService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsService]
    });
  });

  beforeEach(inject([FormsService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getElements', () => {
    it('should return 4 items', () => {
      const elements = service.getElements();
      expect(elements.length).toEqual(4);
    });
    it('should return elements[] = mockData[] ', () => {
      const elements = service.getElements();
      expect(elements).toEqual(mockData);
    });
  });
});
