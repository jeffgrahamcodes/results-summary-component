import Image from 'next/image';
import data from '../data.json';

export default function Home() {
  return (
    <div className="h-screen  bg-(--very-light-blue) flex flex-col justify-center items-center">
      <main className=" bg-white flex flex-row rounded-4xl w-[736px] box-border h-[512px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <section className="bg-gradient-to-b from-[#7755FF] from-0% via-[#6943FF] via-0% to-[#2F2CE9] to-100% rounded-4xl w-[368px] flex flex-col items-center justify-evenly text-center">
          <p className="heading-m text-(--light-blue)">Your Result</p>
          <span className="w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-[#7755FF] from-0% via-[#6943FF] via-0% to-[#2F2CE9] to-100% ">
            <p className="heading-xl">76</p>
            <p className="text-lg font-bold text-(--light-blue) opacity-[.5168]">
              of 100
            </p>
          </span>
          <div className="w-[260px] h-[134px]">
            <p className="mb-[14px] heading-l font-bold">Great</p>
            <p className="text-lg font-medium text-(--light-blue) leading-[22px]">
              You scored higher than 65% of the people who have taken
              these tests.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-evenly text-black w-[368px] px-[40px]">
          <p className="heading-m text-(--dark-navy)">Summary</p>
          <ul className="grid gap-[16px]">
            {data.map((d) => (
              <li
                key={d.category}
                className="w-[288px] h-[56px] rounded-xl flex items-center justify-between px-4 nth-1:bg-red-50 nth-1:text-(--light-red) nth-2:bg-yellow-50 nth-2:text-(--orangey-yellow) nth-3:bg-green-50 nth-3:text-(--green-teal) nth-4:bg-blue-50 nth-4:text-(--cobalt-blue) text-lg font-medium"
              >
                <span className="flex">
                  <Image
                    src={`${d.icon}`}
                    width={20}
                    height={20}
                    alt=""
                    className="mr-3"
                  />
                  {d.category}
                </span>
                <span>
                  <span className="text-(--dark-navy) font-bold">
                    {d.score}
                  </span>
                  <span className="text-(--dark-navy) opacity-[.5]">
                    &nbsp;&nbsp;/ 100
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <button className="w-[288px] h-[56px] bg-(--dark-navy) rounded-[128px] text-white font-bold text-lg cursor-pointer hover:bg-gradient-to-b from-[#7755FF] from-0% via-[#6943FF] via-0% to-[#2F2CE9] to-100%">
            Continue
          </button>
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
