import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {AkuminaIFrameComponent} from './akumina-iframe.component'

describe('AkuminaIFrameComponent', () => {
  let component: AkuminaIFrameComponent
  let fixture: ComponentFixture<AkuminaIFrameComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AkuminaIFrameComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AkuminaIFrameComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
