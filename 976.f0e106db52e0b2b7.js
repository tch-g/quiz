"use strict";(self.webpackChunkngxs_quiz=self.webpackChunkngxs_quiz||[]).push([[976],{4976:(q,l,r)=>{r.r(l),r.d(l,{TriviaModule:()=>R});var c=r(9808),p=r(5646),u=r(6469),g=r(8450),t=r(7587),m=r(3208),d=r(4080),_=r(3576),f=r(1012);function x(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",4),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().getResult(a)}),t._uU(2),t.qZA(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw();t.xp6(1),t.Q6J("disabled",o.userAnswer)("ngClass",o.getButtonClass(e)),t.xp6(1),t.hij(" ",e," ")}}function h(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextQuestion()}),t._uU(2," Next "),t.qZA(),t.BQk()}2&n&&(t.xp6(1),t.Q6J("@slideUp",void 0))}function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).goToResults()}),t._uU(1," Results "),t.qZA()}2&n&&t.Q6J("@slideUp",void 0)}function C(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",5),t.YNc(2,h,3,1,"ng-container",6),t.YNc(3,w,2,1,"ng-template",null,7,t.W1O),t.qZA(),t.BQk()),2&n){const e=t.MAs(4),o=t.oxw();t.xp6(2),t.Q6J("ngIf",!o.isLastQuestion)("ngIfElse",e)}}let v=(()=>{class n{constructor(){this.next=new t.vpe,this.showResults=new t.vpe,this.processResult=new t.vpe}getResult(e){this.userAnswer=e;const o=e===this.question.correct_answer;return this.processResult.emit(o),o}nextQuestion(){this.userAnswer=null,this.next.emit()}goToResults(){this.showResults.emit()}get isLastQuestion(){return this.currIndex===this.amount-1}getButtonClass(e){return this.userAnswer&&e===this.question.correct_answer?"correct":e===this.userAnswer?e===this.question.correct_answer?"correct":"incorrect":void 0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-question"]],inputs:{question:"question",currIndex:"currIndex",amount:"amount"},outputs:{next:"next",showResults:"showResults",processResult:"processResult"},decls:8,vars:6,consts:[[1,"wrapper"],[1,"answers-wrap"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-secondary",3,"disabled","ngClass","click"],[1,"btn-wrap"],[4,"ngIf","ngIfElse"],["last",""],[1,"btn","btn-success","ms-2","mt-2",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h5"),t._uU(2),t.qZA(),t.TgZ(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"div",1),t.YNc(6,x,3,3,"ng-container",2),t.qZA()(),t.YNc(7,C,5,2,"ng-container",3)),2&e&&(t.Q6J("@slowSlide",void 0),t.xp6(2),t.AsE("Question ",o.currIndex+1,"/",o.amount,""),t.xp6(2),t.Oqu(o.question.question),t.xp6(2),t.Q6J("ngForOf",o.question.answers),t.xp6(1),t.Q6J("ngIf",o.userAnswer))},directives:[c.sg,c.mk,c.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-left:10px}.wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:5px}.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]   .answers-wrap[_ngcontent-%COMP%]{margin-bottom:10px}.wrapper[_ngcontent-%COMP%]   .answers-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px 10px 0;transition:background-color .5s linear}.wrapper[_ngcontent-%COMP%]   .answers-wrap[_ngcontent-%COMP%]   button.correct[_ngcontent-%COMP%]{background-color:#02c502;color:#fff}.wrapper[_ngcontent-%COMP%]   .answers-wrap[_ngcontent-%COMP%]   button.incorrect[_ngcontent-%COMP%]{background-color:#da0101;color:#fff}.btn-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.btn-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}@media only screen and (max-width: 480px){.answers-wrap[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;gap:5px;justify-content:center;align-items:center}}"],data:{animation:[f.f,_.i]},changeDetection:0}),n})();const O=[{path:"",component:(()=>{class n{constructor(e,o,i){this.questionsService=e,this.router=o,this.store=i}ngOnInit(){this.getNextQuestion()}getNextQuestion(){this.question=this.questionsService.getNextQuestion()}setScore(e){e&&this.store.dispatch(g.qB)}showResults(){this.router.navigateByUrl("results")}get currIndex(){return this.questionsService.getCurrIndex()}get amount(){return this.questionsService.getAmount()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.w),t.Y36(u.F0),t.Y36(d.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-trivia"]],decls:1,vars:3,consts:[[3,"question","currIndex","amount","processResult","next","showResults"]],template:function(e,o){1&e&&(t.TgZ(0,"app-question",0),t.NdJ("processResult",function(a){return o.setScore(a)})("next",function(){return o.getNextQuestion()})("showResults",function(){return o.showResults()}),t.qZA()),2&e&&t.Q6J("question",o.question)("currIndex",o.currIndex)("amount",o.amount)},directives:[v],styles:[""],changeDetection:0}),n})(),canActivate:[(()=>{class n{constructor(e){this.router=e}canActivate(e,o){return"/info"===this.router.url||(this.router.navigate([""]),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),r(3341).S]}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(O)],u.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,p.m,y]]}),n})()}}]);