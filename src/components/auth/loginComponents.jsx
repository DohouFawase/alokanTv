import Input from "../ui/input/input";
import Button from "../ui/button/button";
import { NavLink } from "react-router";
export default function LoginComponents() {
  return (
    <div className="h-screen w-full flex justify-center items-center p-12">
      <div className=" h-full w-[80%] rounded-lg bg-amber-300  grid grid-cols-2 gap-4 ">
        <div className="bg-blue-600">
            <p>Z</p>
        </div>

        <div className="px-4">
            <div className="flex flex-col justify-center items-center">
                <form action="">
                    <div className="">
                    <Input type="email" label="Email" name='email' placeholder="Veillez entrez votre email"  className="p-2 rounded-lg outline-none border border-gray-400"/>
                    <Input type="password" label="Mots de Passe" name='password' placeholder="Veillez entrez votre mots de passe"  className="p-2 rounded-lg outline-none border border-gray-400"/>
                    </div>

                    <div className="">
                        <Button>
                            Se connecter
                        </Button>
                    </div>
                    <div className="">
                        <NavLink>
Mots de Passe Oublier
                        </NavLink>
                    </div>
                    <p>Vous N'avez pas un compte <NavLink>Inscrivez vous</NavLink></p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
