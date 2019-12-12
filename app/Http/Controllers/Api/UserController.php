<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
class UserController extends Controller 
{
public $successStatus = 200;
/** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => $success,'user'=>$user], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
/** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
$input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')-> accessToken; 
        $success['name'] =  $user->name;
return response()->json(['success'=>$success], $this-> successStatus); 
    }
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user], $this-> successStatus); 
    } 

    public function logoutApi(Request $request)
        { 
            // dd(Auth::guard('api')->user()); // instance of the logged user
            // dd(Auth::guard('api')->check()); // if a user is authenticated
            // dd(Auth::guard('api')->id()); 
            // if (Auth::check()) {
            //     Auth::user()->AauthAcessToken()->delete();
            //  }
            //  dd(Auth::user()->AuthAcessToken());
            //  return response()->json(['success'=>'Successfully Logout']);
            $user = Auth::guard('api')->user();
            dd($user->api_token);
            if ($user) {
                $user->api_token = null;
                $user->save();
            }

            return response()->json(['data' => 'User logged out.'], 200);
        }

    public function getContent($slug){
        // dd($slug);
        return response()->json(['data'=>$slug],200);
    }
}