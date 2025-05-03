// Updated LoginForm with styling inspired by dark dashboard UI
import { useState, useEffect } from "react"
// import { AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {LoginUser , reset} from '../features/authSlice'



export default function LoginForm() {
  const [nip, setNip] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isError, isSuccess, message} = useSelector((state) => state.auth);

 
  useEffect(() => {
    if(user || isSuccess){
      navigate('/home');

    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(LoginUser({ nip, password }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#282858]">

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-8 bg-[#1e1e2f] rounded-2xl shadow-lg text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>

      {isError && (
        <p className=" text-center gap-2 mb-4 text-sm text-red-500">{message}</p>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium">
          NIP
        </label>
        <input
          id="nip"
          type="text"
          placeholder="123456789"
          value={nip}
          onChange={(e) => setNip(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#2b2b40] border border-[#3e3e55] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Forgot password?
          </a>
        </div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 bg-[#2b2b40] border border-[#3e3e55] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
    </div>
  )
}
