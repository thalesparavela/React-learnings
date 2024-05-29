import { Container, Links } from './styles';

import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Tag } from '../../components/Tag';

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://app.rocketseat.com.br/home</a>
          </li>
          <li>
            <a href="#">https://app.rocketseat.com.br/home</a>
          </li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title='Express'/>
        <Tag title='NodeJs'/>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
