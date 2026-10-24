// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { authguardGuard } from './authguard.guard';

// describe('authguardGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => authguardGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AdminAuthGuard } from './authguard.guard';
import { StorageService } from '../Signup/service/storage.service';
import { AuthService } from '../Signup/service/auth.service';

describe('AdminAuthGuard', () => {
  let guard: AdminAuthGuard;
  let storageServiceStub: Partial<StorageService>;
  let routerStub: Partial<Router>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    storageServiceStub = {};
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    authServiceStub = {};

    TestBed.configureTestingModule({
      providers: [
        { provide: StorageService, useValue: storageServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: AuthService, useValue: authServiceStub }
      ]
    });

    guard = new AdminAuthGuard(TestBed.inject(StorageService), TestBed.inject(Router), TestBed.inject(AuthService));
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
