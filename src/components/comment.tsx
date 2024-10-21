import Image from "next/image";
import { CheckIcon, StarIcon } from "lucide-react";
// @components
import { Each } from "./each";

const array = [1, 2, 3, 4, 5];

interface Props {
  user: {
    name: string;
    isVerified: boolean;
  };
  image: string;
  description: string;
}

export function Comment({ user, image, description }: Readonly<Props>) {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5 mb-2">
        <Each
          of={array}
          render={() => {
            return <StarIcon className="w-4 h-4 text-primary fill-primary" />;
          }}
        />
      </div>
      <div className="text-lg leading-8">
        <p>&#34;{description}&#34;</p>
      </div>
      <div className="flex gap-4 mt-2">
        <Image
          src={image}
          alt="user"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{user.name}</p>
          {user.isVerified === true && (
            <div className="flex gap-1.5 items-center text-zinc-600">
              <CheckIcon className="w-4 h-4 stroke-[3px] text-primary" />
              <p className="text-sm">Acquisto verificato</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
