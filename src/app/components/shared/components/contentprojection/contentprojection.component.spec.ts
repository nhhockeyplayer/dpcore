import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ContentprojectionComponent} from './contentprojection.component'

describe('ContentprojectionComponent', () => {
  let component: ContentprojectionComponent
  let fixture: ComponentFixture<ContentprojectionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentprojectionComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentprojectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
