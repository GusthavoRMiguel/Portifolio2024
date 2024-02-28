import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SidebarContainer, ToggleButton, Links } from './styles';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineTrophy,
  AiOutlineComment,
  AiOutlineClose,
  AiOutlineMenu
} from 'react-icons/ai';

interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onOpen }) => {
  const router = useRouter();
  const toggleSidebar = () => {
    onOpen();
  };

  return (
    <>
      <SidebarContainer open={isOpen}>
        <ToggleButton open={isOpen} onClick={toggleSidebar}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </ToggleButton>
        <Links open={isOpen}>
          <Link href={'/'} className={router.pathname === '/' ? 'active' : ''}>
            {isOpen ? (
              <>
                <AiOutlineHome />
                <p> Home</p>
              </>
            ) : (
              <AiOutlineHome />
            )}
          </Link>
          <Link
            href={'/about'}
            className={router.pathname === '/about' ? 'active' : ''}
          >
            {isOpen ? (
              <>
                <AiOutlineUser /> <p>Sobre mim</p>
              </>
            ) : (
              <AiOutlineUser />
            )}
          </Link>
          <Link
            href={'projects'}
            className={router.pathname === '/projects' ? 'active' : ''}
          >
            {isOpen ? (
              <>
                <AiOutlineCode />
                <p> Projetos</p>
              </>
            ) : (
              <AiOutlineCode />
            )}
          </Link>
          <Link
            href={'certificates'}
            className={router.pathname === '/certificates' ? 'active' : ''}
          >
            {isOpen ? (
              <>
                <AiOutlineTrophy /> <p>Certificados</p>
              </>
            ) : (
              <AiOutlineTrophy />
            )}
          </Link>
          <Link
            href={'contact'}
            className={router.pathname === '/contact' ? 'active' : ''}
          >
            {isOpen ? (
              <>
                <AiOutlineComment /> <p>Contato</p>
              </>
            ) : (
              <AiOutlineComment />
            )}
          </Link>
        </Links>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
