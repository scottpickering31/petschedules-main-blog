import { login } from '../actions/actions'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <p>Don't have an account?</p>
      <Link href="/register">Sign up here</Link>
    </form>
  )
}