import { createContext, useState } from 'react';

export interface ContextType {
  isDarkMode: boolean,
  handleChangeTheme: () => void
}

export const Context = createContext<ContextType | null>(null);

interface Props {
  children: React.ReactNode
}

export const Provider = ({ children }: Props) => {

  const [isDarkMode, setIsDarKMode] = useState<boolean>(false);

  const handleChangeTheme = () => setIsDarKMode(prev => !prev);

  const value: ContextType = {
    isDarkMode,
    handleChangeTheme
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}