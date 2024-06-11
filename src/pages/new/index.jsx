import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import { Container, Form } from './styles';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textArea';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" />
          <TextArea placeholder="Obervações" />
          <Section title="Links úteis">
            <NoteItem />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
