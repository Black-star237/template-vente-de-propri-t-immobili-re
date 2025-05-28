
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Connexion réussie !",
      description: "Vous êtes maintenant connecté à votre compte.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Se connecter
                  </h1>
                  <p className="text-gray-600">
                    Connectez-vous à votre compte pour accéder à vos favoris
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                        Se souvenir de moi
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-primary-500 hover:text-primary-600">
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600">
                    <LogIn className="w-4 h-4 mr-2" />
                    Se connecter
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Pas encore de compte ?{' '}
                    <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
                      Créer un compte
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
