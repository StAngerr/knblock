import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Skill} from "../types/skill";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }


  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('http://localhost:3000/skills')
  }
}
