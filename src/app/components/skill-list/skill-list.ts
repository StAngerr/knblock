import {Component} from "@angular/core";
import {Router} from "@angular/router";

interface Skill {
  id: string ;
  name: string;
  desc: string;
}

@Component({
  templateUrl: './skill-list.html'
})
export class SkillList {
  skills: Skill[] = [{ id: '1', name: 'Skill 1', desc: 'short desc'},
    { id: '2', name: 'How build', desc: 'learn to build'},
    { id: '3', name: 'js cloud', desc: 'learn AMS'},
    { id: '4', name: 'Last title', desc: 'Description is missing'}];


  constructor(private router: Router) {
  }

  openSkill(id: string) {
    this.router.navigate([`/skill/${id}`])
  }
}
