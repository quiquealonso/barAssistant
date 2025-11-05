import { Injectable } from '@angular/core';
import { SectionType } from '../../model/section-type';
import * as DataSectionType from './sectionType.json';

@Injectable({
  providedIn: 'root'
})
export class SectionTypeService {
  data: SectionType[] = (DataSectionType as any).default as SectionType[];
  getData(): SectionType[] {
    return this.data;
  }
}
