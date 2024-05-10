
import {signup} from '../actions/actions'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signup}>Sign up</button>
      <p>Aready have an account?</p>
      <Link href="/login">Sign In</Link>
    </form>
  )
}