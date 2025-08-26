import { authSlice, checkingCredentials, login, logout } from "../../../src/store";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Test en authSlice', () => { 

  test('debe de regresar el estado inicial y llamarse "auth"', () => { 

    expect ( authSlice.name ).toBe ('auth');
    const state = authSlice.reducer ( initialState, {} );

    expect ( state ).toEqual ( initialState );

  });

  test('debe de realizar la autenticación', () => { 

    const state = authSlice.reducer (initialState, login ( demoUser ) );
    expect ( state ).toEqual ({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null
    });

  });

  test('debe de realizar el logout sin argumentos', () => {

    const state = authSlice.reducer ( demoUser, logout () );
    expect ( state ).toEqual ({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null
    });

  });

  test('debe de realizar el logout y mostrar un mensaje de error ', () => { 

    const errorMessage = 'credenciales no son correctas';

    const state = authSlice.reducer ( authenticatedState, logout ({ errorMessage }) );
    expect ( state ).toEqual ({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: 'credenciales no son correctas'
    });

  });

  test('debe de cambiar el estado a checking', () => { 

    const state = authSlice.reducer ( authenticatedState, checkingCredentials () );
    expect ( state.status ).toBe ( 'checking' );

  });

});