import React from 'react';
import Link from 'next/link';

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
          <Link href={'/'}>
            {isOpen ? (
              <>
                <AiOutlineHome /> Home
              </>
            ) : (
              <AiOutlineHome />
            )}
          </Link>
          <Link href={'/about'}>
            {isOpen ? (
              <>
                <AiOutlineUser /> Sobre mim
              </>
            ) : (
              <AiOutlineUser />
            )}
          </Link>
          <Link href={'projects'}>
            {isOpen ? (
              <>
                <AiOutlineCode /> Projetos
              </>
            ) : (
              <AiOutlineCode />
            )}
          </Link>
          <Link href={'certificates'}>
            {isOpen ? (
              <>
                <AiOutlineTrophy /> Certificados
              </>
            ) : (
              <AiOutlineTrophy />
            )}
          </Link>
          <Link href={'contact'}>
            {isOpen ? (
              <>
                <AiOutlineComment /> Contato
              </>
            ) : (
              <AiOutlineComment />
            )}
          </Link>
        </Links>
      </SidebarContainer>
      s
    </>
  );
};

export default Sidebar;
