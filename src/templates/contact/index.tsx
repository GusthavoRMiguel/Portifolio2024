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
  phone: yup
    .string()
    .label('Telefone de Contato')
    .notRequired()
    .test('is-valid-phone', 'Digite apenas números.', (value) => {
      if (!value) return true;
      const phoneRegex = /^\d+$/;
      const isValidLength = value.length === 12;

      if (!phoneRegex.test(value)) {
        throw new yup.ValidationError('Digite apenas números.', value, 'phone');
      }
      if (!isValidLength) {
        const missingNumbers = Math.max(12 - value.length, 0);
        let errorMessage = `Faltam ${missingNumbers} número(s), incluindo o DDD. `;
        throw new yup.ValidationError(errorMessage, value, 'phone');
      }
      return true;
    }),
  message: yup
    .string()
    .label('Mensagem')
    .required('Por favor, preencha aqui!')
    .min(10)
    .max(1000)
});

const ContactPage: React.FC = () => {
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
    try {
      const res = await axios.post('/api/contact-form', values);

      if (res.data.status === 1 || 'Falha no envio da mensagem.') {
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
          {' '}
          <Heading>
            <PageName page="Contato" />
            <CustomSwitch />
          </Heading>
          <BoxMain>
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
                    <div>gusthavo.dev@gmail.com</div>
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
                      onSubmit={(values, { setSubmitting }) => {
                        submitForm(values)
                          .then(() => {
                            setIsSubmitted(true);
                          })
                          .catch((error) => {
                            alert(
                              'Um erro ocorreu. Consulte o registro para obter detalhes.'
                            );
                            console.error(error);
                          })
                          .finally(() => {
                            setSubmitting(false);
                          });
                      }}
                    >
                      {({ isSubmitting, errors, touched, isValid, values }) => (
                        <form>
                          <div className="container-input">
                            <label htmlFor="name">Nome Completo</label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={
                                touched.name && errors.name ? 'erro' : ''
                              }
                            />
                            <ErrorMessage
                              className="error-message"
                              name="name"
                              component="span"
                            />
                          </div>

                          <div className="container-input">
                            <label htmlFor="email">Endereço de Email</label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className={
                                touched.email && errors.email ? 'erro' : ''
                              }
                            />
                            <ErrorMessage
                              className="error-message"
                              name="email"
                              component="span"
                            />
                          </div>

                          <div className="container-input">
                            <label htmlFor="phone">Telefone de Contato</label>
                            <Field
                              type="tel"
                              id="phone"
                              name="phone"
                              className={
                                touched.phone && errors.phone ? 'erro' : ''
                              }
                            />
                            <ErrorMessage
                              className="error-message"
                              name="phone"
                              component="span"
                            />
                          </div>

                          <div className="container-message">
                            <label htmlFor="message">Mensagem</label>
                            <Field
                              as="textarea"
                              id="message"
                              name="message"
                              className={
                                touched.message && errors.message ? 'erro' : ''
                              }
                            />
                            <ErrorMessage
                              className="error-message"
                              name="message"
                              component="span"
                            />
                          </div>

                          <button
                            type="button"
                            disabled={isSubmitting || !isValid}
                            onClick={() => {
                              submitForm(values);
                            }}
                          >
                            {isSubmitting
                              ? 'Enviando...'
                              : isValid
                              ? 'Enviar'
                              : 'Corrija os campos com erro!'}
                          </button>
                        </form>
                      )}
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
