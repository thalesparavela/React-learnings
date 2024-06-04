import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Note } from '../../components/Note';
import { Section } from '../../components/section';
import { Input } from '../../components/input';
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJs" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Content>
        <Section title="Minhas notas"></Section>
        <Note
          data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocket' },
            ],
          }}
        />
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
