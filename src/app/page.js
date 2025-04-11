import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="h-screen flex justify-center items-center">
        <section>
          <p>Your Result</p>
          <p>76 of 100</p>
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken
            these tests.
          </p>
        </section>
        <section>
          <p>Summary</p>
          <p>Reaction 80 / 100</p>
          <p>Memory 92 / 100</p>
          <p>Verbal 61 / 100</p>
          <p>Visual 72 / 100</p>
          <p>Continue</p>
        </section>
      </main>

      <footer class="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}
