
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifeCycleHooksComponent } from '../app/life-cycle-hooks/life-cycle-hooks.component';
import { ParentChildComponent } from '../app/parent-child/parent-child.component';
import { PipeAndDirectivesComponent } from '../app/pipe-and-directives/pipe-and-directives.component';
import { ReactiveFormComponent } from '../app/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from '../app/template-driven-form/template-driven-form.component';
import { DynamicRouteComponent } from '../app/dynamic-route/dynamic-route.component';
import { ChildRouteComponent } from '../app/dynamic-route/child-route/child-route.component';
import { LifeCyclehooksService } from '../app/services/life-cyclehooks.service';
import { DemoChildComponent } from './life-cycle-hooks/demo-child/demo-child.component';
import { CustomPipe } from '../app/pipes/custom.pipe';
import { ChildComponent } from './parent-child/child/child.component';
import { PubSubService } from '../app/services/pub-sub.service';
import { ActivateResolveService } from '../app/services/activate-resolve.service';
import { GenderDirective } from '../app/customDirective/genderDirective';

const appRoutes: Routes = [
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'dynamic-route/:route', // path: 'dynamic-route/:firstParam/:secondParam'
    component: DynamicRouteComponent,
    canActivate: [ActivateResolveService],
    resolve: {
      resolveValue: ActivateResolveService
    },
    canActivateChild: [ActivateResolveService],
    children: [
      {
        path: ':childRoute',
        component: ChildRouteComponent
      }]
  },
  {
    path: 'life-cycle-hooks',
    component: LifeCycleHooksComponent
  },
  {
    path: 'lazy',
    loadChildren: '../app/lazy-loading/lazy.module#LazyModule'
  },
  {
    path: 'parent-child',
    component: ParentChildComponent
  },
  {
    path: 'pipe-directives',
    component: PipeAndDirectivesComponent
  },
  { path: '**', redirectTo: 'template-driven-form' }
];

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    ParentChildComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    DynamicRouteComponent,
    PipeAndDirectivesComponent,
    DemoChildComponent,
    CustomPipe,
    ChildComponent,
    ChildRouteComponent,
    GenderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true, preloadingStrategy: PreloadAllModules }
    )
  ],
  providers: [LifeCyclehooksService, PubSubService, ActivateResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
