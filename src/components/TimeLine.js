import TypeWriter from "./TypeWriter";

export default function TimeLine() {
    return (
        // TODO: Start using Wrappers or Containers. React components instead of conventianal <span> and <div>
        //  Integrate with styled compoenent.
        <div>
            <TypeWriter text='2019'/>
            <TypeWriter text='2020'/>
        </div>
    )
}