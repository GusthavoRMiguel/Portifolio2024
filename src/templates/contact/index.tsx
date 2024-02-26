import React, { useState } from 'react';
import Head from 'next/head';
import * as yup from 'yup';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';

import {
  RiMailFill,
  RiMailOpenLine,
  RiRoadMapFill,
  RiRoadMapLine,
  RiWhatsappFill,
  RiWhatsappLine
} from 'react-icons/ri';

import {
  Container,
  Content,
  FormContainer,
  ThankYouContainer,
  BoxImage,
  BoxContact,
  BoxMain,
  BoxForm,
  Heading
} from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';
import Link from 'next/link';
import CustomSwitch from '@/components/switchTheme';

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .label('Nome Completo')
    .required('Por favor, preencha aqui!')
    .min(3)
    .max(30),
  email: yup
    .string()
    .label('Endereço de Email')
    .required('Por favor, preencha aqui!')
    .email('Endereço de email inválido.'),
  phone: yup.string().label('Telefone de Contato').max(12),
  message: yup
    .string()
    .label('Mensagem')
    .required('Por favor, preencha aqui!')
    .min(10)
    .max(1000)
});

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const submitForm = async (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setIsSubmitting(true);

    try {
      const res = await axios.post('/api/contact-form', values);
      setIsSubmitting(false);

      if (res.data.status === 1) {
        setIsSubmitted(true);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert('Um erro ocorreu. Consulte o registro para obter detalhes.');
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Contato | Gusthavo Ramos</title>
      </Head>
      <Container>
        <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
        <Content className={isSidebarOpen ? 'open-sidebar' : ''}>
          <Heading>
            {' '}
            <CustomSwitch />
          </Heading>

          <BoxMain>
            <PageName page="Contato" />

            <BoxForm>
              <div className="grid">
                <BoxContact>
                  <BoxImage>
                    <img src="/img/contact.png" alt="contactImg" />
                  </BoxImage>
                  <h1>Entre em contato</h1>
                  <p>Preencha o formulário ao lado </p>
                  <p className="mobile">Preencha o formulário abaixo </p>
                  <Link
                    href="https://maps.google.com/maps?q=Rua+Manuel+Gaya,+Vila+Mazzei,+S%C3%A3o+Paulo-SP,+02313-001"
                    target="__blank"
                    className="item"
                  >
                    <RiRoadMapLine />
                    <div>
                      Rua Manuel Gaya, Vila Mazzei, São Paulo-SP, 02313-001
                    </div>
                  </Link>

                  <Link
                    href="https://wa.me/5511982735663"
                    target="__blank"
                    className="item"
                  >
                    <RiWhatsappLine />
                    <div> 011 98273-5663</div>
                  </Link>

                  <Link
                    href="mailto:gusthavo.rmiguel@gmail.com"
                    target="__blank"
                    className="item"
                  >
                    <RiMailOpenLine />
                    <div>gusthavo.rmiguel@gmail.com</div>
                  </Link>
                </BoxContact>
                <FormContainer>
                  {!isSubmitted ? (
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                      }}
                      validationSchema={ContactSchema}
                      onSubmit={(values) => submitForm(values)}
                    >
                      <form>
                        <div>
                          <label htmlFor="name">Nome Completo</label>
                          <Field type="text" id="name" name="name" />
                          <ErrorMessage name="name" component="div" />
                        </div>

                        <div>
                          <label htmlFor="email">Endereço de Email</label>
                          <Field type="email" id="email" name="email" />
                          <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                          <label htmlFor="phone">Telefone de Contato</label>
                          <Field type="tel" id="phone" name="phone" />
                          <ErrorMessage name="phone" component="div" />
                        </div>

                        <div>
                          <label htmlFor="message">Mensagem</label>
                          <Field as="textarea" id="message" name="message" />
                          <ErrorMessage name="message" component="div" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                      </form>
                    </Formik>
                  ) : (
                    <ThankYouContainer>
                      <h1>Obrigado !</h1>
                      <p>
                        Sua mensagem foi recebida. Verifique seu email para
                        confirmar!
                      </p>
                    </ThankYouContainer>
                  )}
                </FormContainer>
              </div>
            </BoxForm>
          </BoxMain>
        </Content>
      </Container>
    </>
  );
};

export default ContactPage;
