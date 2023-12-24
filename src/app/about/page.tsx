import { SubTopics } from "../_components/about/Subtopics";
import { MainLayout } from "../_components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div>hello from about</div>

      <SubTopics heading="Lorem Ipsum">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
        laudantium dolorem ullam nemo! Est, cum? Maiores quae a rerum deleniti
        eligendi iusto totam atque, accusamus velit, at odio ducimus.
      </SubTopics>

      <SubTopics heading="Lorem Ipsum">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
        laudantium dolorem ullam nemo! Est, cum? Maiores quae a rerum deleniti
        eligendi iusto totam atque, accusamus velit, at odio ducimus.
      </SubTopics>

      {/* <Text textSize="heading">Lorem Ipsum</Text>
      <Text textSize="heading">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores hic
        error labore adipisci deserunt qui incidunt ipsa consequuntur deleniti
        aut fuga aspernatur rerum nemo, amet enim tenetur eaque possimus unde?
      </Text> */}
    </MainLayout>
  );
};

export default About;
