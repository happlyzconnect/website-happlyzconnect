import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, Monitor, RotateCcw, RotateCw } from "lucide-react";
import { MetaDescription } from "@/components/MetaDescription";
import { ScreenVisualization } from "@/components/ScreenVisualization";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ScreenSizeConverter = () => {
  const [inches, setInches] = useState<string>("");
  const [centimeters, setCentimeters] = useState<string>("");
  const [displayType, setDisplayType] = useState<string>("standard");
  const [diagonalCm, setDiagonalCm] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape");

  // Common screen sizes for the dropdown
  const commonSizes = [
    { label: "Choisir une taille standard", value: "" },
    { label: "24 pouces", value: "24" },
    { label: "27 pouces", value: "27" },
    { label: "32 pouces", value: "32" },
    { label: "43 pouces", value: "43" },
    { label: "50 pouces", value: "50" },
    { label: "55 pouces", value: "55" },
    { label: "65 pouces", value: "65" },
    { label: "75 pouces", value: "75" },
    { label: "85 pouces", value: "85" },
    { label: "98 pouces", value: "98" },
  ];

  // Aspect ratios for different display types - Remove cinema option
  const aspectRatios = {
    standard: { ratio: 16 / 9, name: "16:9 (Standard)" },
    ultrawide: { ratio: 21 / 9, name: "21:9 (Ultrawide)" },
    square: { ratio: 1 / 1, name: "1:1 (Carré)" },
    classic: { ratio: 4 / 3, name: "4:3 (Classique)" },
  };

  // Convert inches to centimeters when user inputs or selects a value
  useEffect(() => {
    if (inches && !isNaN(parseFloat(inches))) {
      const inchesValue = parseFloat(inches);
      const cmValue = inchesValue * 2.54;
      setCentimeters(cmValue.toFixed(2));
      
      // Calculate screen dimensions based on aspect ratio
      const aspectRatio = aspectRatios[displayType as keyof typeof aspectRatios].ratio;
      const diagonal = cmValue;
      
      setDiagonalCm(cmValue.toFixed(2));
      
      // Using the Pythagorean theorem and aspect ratio to calculate dimensions
      const diagonalSquared = diagonal * diagonal;
      const widthRatio = aspectRatio / Math.sqrt(1 + aspectRatio * aspectRatio);
      const heightRatio = 1 / Math.sqrt(1 + aspectRatio * aspectRatio);
      
      const widthValue = diagonal * widthRatio;
      const heightValue = diagonal * heightRatio;
      
      setWidth(widthValue.toFixed(2));
      setHeight(heightValue.toFixed(2));
    } else {
      setCentimeters("");
      setDiagonalCm("");
      setWidth("");
      setHeight("");
    }
  }, [inches, displayType]);

  // Handle common size selection
  const handleSizeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInches(e.target.value);
  };

  // Handle display type selection
  const handleDisplayTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayType(e.target.value);
  };

  // Handle manual input
  const handleInchesInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d*\.?\d*$/.test(value) && parseFloat(value) <= 1000)) {
      setInches(value);
    }
  };

  // Handle orientation change
  const handleOrientationChange = (value: "landscape" | "portrait") => {
    setOrientation(value);
  };

  return (
    <>
      <Helmet>
        <title>Convertisseur de taille d'écran : Pouces en Centimètres | Happlyz Connect</title>
        <meta 
          name="description" 
          content="Convertissez facilement les tailles d'écran de pouces en centimètres avec notre outil gratuit. Calculez les dimensions exactes de votre écran pour vos projets d'affichage dynamique et solutions audiovisuelles." 
        />
        <meta 
          name="keywords" 
          content="convertisseur pouces centimètres, taille écran, dimensions écran, conversion écran, écran affichage dynamique, écran interactif, calculateur taille écran" 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <MetaDescription
          title="Convertisseur de taille d'écran : Pouces en Centimètres"
          description="Utilisez notre outil gratuit pour convertir instantanément les tailles d'écran de pouces en centimètres et calculer les dimensions exactes selon différents formats."
          className="mt-24 pt-4 text-center"
        />

        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-[#56C7E1]/20 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-6">
                  <Calculator className="text-[#56C7E1] mr-2" size={28} />
                  <h1 className="text-2xl font-bold text-business-primary">Convertisseur de taille d'écran</h1>
                </div>
                
                <div className="grid gap-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="display-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Format d'affichage
                      </label>
                      <select
                        id="display-type"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#56C7E1]"
                        value={displayType}
                        onChange={handleDisplayTypeSelect}
                      >
                        {Object.entries(aspectRatios).map(([key, { name }]) => (
                          <option key={key} value={key}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Orientation
                      </label>
                      <RadioGroup 
                        value={orientation} 
                        onValueChange={(value: "landscape" | "portrait") => handleOrientationChange(value)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="landscape" id="landscape" />
                          <label htmlFor="landscape" className="flex items-center cursor-pointer">
                            <RotateCw size={18} className="mr-1 text-[#56C7E1]" />
                            <span>Paysage</span>
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="portrait" id="portrait" />
                          <label htmlFor="portrait" className="flex items-center cursor-pointer">
                            <RotateCcw size={18} className="mr-1 text-[#56C7E1]" />
                            <span>Portrait</span>
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="common-sizes" className="block text-sm font-medium text-gray-700 mb-1">
                      Tailles standards
                    </label>
                    <select
                      id="common-sizes"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#56C7E1]"
                      value={inches}
                      onChange={handleSizeSelect}
                    >
                      {commonSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label htmlFor="inches" className="block text-sm font-medium text-gray-700 mb-1">
                        Taille en pouces
                      </label>
                      <div className="relative">
                        <input
                          id="inches"
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#56C7E1]"
                          placeholder="Ex: 32"
                          value={inches}
                          onChange={handleInchesInput}
                        />
                        <span className="absolute right-3 top-2 text-gray-500">″</span>
                      </div>
                    </div>
                    
                    <div className="w-1/2 flex items-center justify-center">
                      <ArrowRight size={24} className="text-[#56C7E1] mt-6" />
                    </div>
                    
                    <div className="w-1/2">
                      <label htmlFor="centimeters" className="block text-sm font-medium text-gray-700 mb-1">
                        Taille en centimètres
                      </label>
                      <div className="relative">
                        <input
                          id="centimeters"
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50"
                          value={centimeters}
                          readOnly
                        />
                        <span className="absolute right-3 top-2 text-gray-500">cm</span>
                      </div>
                    </div>
                  </div>

                  {diagonalCm && (
                    <div className="mt-6 p-4 bg-[#F8FBFE] rounded-lg border border-[#56C7E1]/20">
                      <div className="flex items-center mb-3">
                        <Monitor className="text-[#56C7E1] mr-2" size={20} />
                        <h3 className="text-lg font-semibold text-business-primary">Dimensions de l'écran</h3>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-white p-3 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Diagonale</p>
                            <p className="font-bold text-business-primary">{diagonalCm} cm</p>
                          </div>
                          <div className="bg-white p-3 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Largeur</p>
                            <p className="font-bold text-business-primary">{width} cm</p>
                          </div>
                          <div className="bg-white p-3 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Hauteur</p>
                            <p className="font-bold text-business-primary">{height} cm</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-gray-100">
                          <div className={`w-full ${parseFloat(diagonalCm) < 40 ? 'max-w-xs' : parseFloat(diagonalCm) < 70 ? 'max-w-md' : 'max-w-lg'} mx-auto`}>
                            <ScreenVisualization 
                              width={width}
                              height={height}
                              diagonal={diagonalCm}
                              aspectRatio={aspectRatios[displayType as keyof typeof aspectRatios].ratio}
                              orientation={orientation}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-business-primary mb-2">Pourquoi convertir les pouces en centimètres ?</h2>
                  <p className="text-sm text-gray-600 mb-3">
                    La conversion des pouces en centimètres est essentielle pour comprendre les dimensions réelles d'un écran, particulièrement pour :
                  </p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Vérifier si un écran s'adaptera à votre espace</li>
                    <li>Choisir la bonne taille d'écran pour votre salle de réunion ou de classe</li>
                    <li>Calculer la distance de visionnage optimale</li>
                    <li>Planifier l'installation d'écrans d'affichage dynamique</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold text-business-primary mb-4">
                Besoin d'aide pour choisir la bonne taille d'écran ?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nos experts peuvent vous aider à sélectionner la taille d'écran idéale pour vos besoins spécifiques, 
                qu'il s'agisse d'affichage dynamique, de salles de réunion ou de solutions pédagogiques.
              </p>
              <Button 
                variant="default" 
                className="bg-business-primary hover:bg-business-primary/90 text-white"
                onClick={() => window.location.href = '/?scrollTo=contact'}
              >
                Demander conseil à un expert
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ScreenSizeConverter;
