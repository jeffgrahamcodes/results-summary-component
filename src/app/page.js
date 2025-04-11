import Image from 'next/image';
import data from '../data.json';

export default function Home() {
  return (
    <div className="h-screen  bg-(--very-light-blue) flex flex-col justify-center items-center">
      <main className=" bg-white flex flex-row rounded-4xl w-[736px] box-border h-[512px]">
        <section className="bg-gradient-to-b from-[#7755FF] from-0% via-[#6943FF] via-0% to-[#2F2CE9] to-100% rounded-4xl w-[368px] flex flex-col items-center justify-evenly text-center">
          <p>Your Result</p>
          <p className="w-[200px] h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-[#7755FF] from-0% via-[#6943FF] via-0% to-[#2F2CE9] to-100% ">
            76 of 100
          </p>
          <div className="w-[260px] h-[134px]">
            <p className="mb-[14px]">Great</p>
            <p>
              You scored higher than 65% of the people who have taken
              these tests.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-evenly text-black w-[368px] px-[40px]">
          <p>Summary</p>
          <ul className="grid gap-[16px]">
            {data.map((d) => (
              <li
                key={d.category}
                className="border w-[288px] h-[56px] rounded-xl"
              >
                <Image
                  src={`${d.icon}`}
                  width={20}
                  height={20}
                  alt=""
                  className="inline"
                />
                {d.category} {d.score}/100
              </li>
            ))}
          </ul>
          <button className="w-[288px] h-[56px]">Continue</button>
        </section>
      </main>

      <footer className="absolute inset-x-0 bottom-0 text-center">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jeff Graham</a>.
      </footer>
    </div>
  );
}
