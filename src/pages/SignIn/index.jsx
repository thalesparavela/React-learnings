import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from '../../components/input';
import { Container, Form, Background } from './styles';
import { Button } from '../../components/button';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}
