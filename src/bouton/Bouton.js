function Bouton({ link, content, target }) {
  const newWindow = target ? '_blank' : '';
  return (

    <button><a href={link} target={newWindow}>{content}</a></button>
  );
}

export default Bouton;
