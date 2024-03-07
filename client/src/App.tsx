import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage, DashboardPage, HomePage, ProjectsPage, SignInPage, SignUpPage } from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<SignInPage />} path='/sign-in' />
        <Route element={<SignUpPage />} path='/sign-up' />
        <Route element={<DashboardPage />} path='/dashboard' />
        <Route element={<ProjectsPage />} path='/projects' />
        <Route element={<AboutPage />} path='/about' />
      </Routes>
    </BrowserRouter>
  )
}
