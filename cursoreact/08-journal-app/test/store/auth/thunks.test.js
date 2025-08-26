import { loginWithEmailPassword, logOutFirebase, singInWithGoogle } from "../../../src/firebase";
import { checkingAuthentication, checkingCredentials, clearNotesLogout, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogOut } from "../../../src/store";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock ( "../../../src/firebase/providers" );
const dispatch = jest.fn ();

describe('Pruebas en authThunks', () => { 

  test('debe llamar a checkingCredentials', async () => { 

    await checkingAuthentication ()( dispatch );
    expect ( dispatch ).toHaveBeenCalledWith ( checkingCredentials ()); 

  });

  test('startGoogleSignIn debe llamar a checkingCredentials y login - Exito', async () => {

    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue ( loginData );

    await startGoogleSignIn ()( dispatch );
    expect ( dispatch ).toHaveBeenCalledWith ( checkingCredentials ()); 
    expect ( dispatch ).toHaveBeenCalledWith ( login ( loginData )); 

  });

  test('startGoogleSignIn debe llamar a checkingCredentials y logout - Error', async () => {

    const loginData = { ok: false, errorMessage: 'Un error en google' };
    await singInWithGoogle.mockResolvedValue ( loginData );

    await startGoogleSignIn ()( dispatch );
    expect ( dispatch ).toHaveBeenCalledWith ( checkingCredentials ()); 
    expect ( dispatch ).toHaveBeenCalledWith ( logout ({ errorMessage: loginData.errorMessage }) );

  });

  test('startLoginWithEmailPassword debe llamar a checkingCredentials y login - Exito', async () => {  

    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password:'123456' };
    await loginWithEmailPassword.mockResolvedValue ( loginData );

    await startLoginWithEmailPassword ( formData )( dispatch );

    expect ( dispatch ).toHaveBeenCalledWith ( checkingCredentials ()); 
    expect ( dispatch ).toHaveBeenCalledWith ( login ( loginData ));

  });

  test('startLogout debe llamar logoutFirebase, clearNotes y logout', async () => { 

    await startLogOut ()(dispatch);

    expect ( logOutFirebase ).toHaveBeenCalled();
    expect ( dispatch ).toHaveBeenCalledWith ( clearNotesLogout ());
    expect ( dispatch ).toHaveBeenCalledWith ( logout ());

  });

});