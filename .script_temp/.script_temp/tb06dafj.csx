using System; 

class URI {

    static void Main(string[] args) { 


    int alcool=0;
    int gasolina=0;
    int diesel=0;
    int tipoCombustivel=0;
    
            do
            {
                
                tipoCombustivel = Convert.ToInt32(Console.ReadLine());
                
                switch (tipoCombustivel)
                {
                    case 1:
                      
                      //alcool=alcool+1;
                     
                    case 2:
                      
                      //gasolina=gasolina+1;
                      
                    case 3:
                      //diesel=diesel+1;
                        
                    case 4:
                   
                        break;
                    default:                       
                        continue;
                }
            }
       
         while (tipoCombustivel==4);

Console.WriteLine("MUITO OBRIGADO");
Console.WriteLine("Alcool: ", alcool );
Console.WriteLine("Alcool: 1", gasolina);
Console.WriteLine("Alcool: 1", diesel);



    }

}