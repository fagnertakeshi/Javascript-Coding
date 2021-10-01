using System; 

class minhaClasse {

    static void Main(string[] args) { 

            //implente sua solução aqui
      
            
      double nota1;
      double nota2;
      
      int count=0;
      bool a=true;
      bool b=true;
      bool xor=true;
      
                      
    nota1 = float.Parse(Console.ReadLine());
                
    nota2 = float.Parse(Console.ReadLine());
      

         do
            {
              
              a=(nota1<0 || nota1>10)
              b= (nota2 <0 || nota2>10)
              
              xor= ( a || b ) && !( a && b );
              
              if (a){
                    Console.WriteLine("nota invalida");
                    nota1 = float.Parse(Console.ReadLine());
              }
                
                if (b) {
                    Console.WriteLine("nota invalida");
                    nota2 = float.Parse(Console.ReadLine());
              
                }

        
            
            }
            
        
        
        
        while (xor);
        

    double  media = nota1+nota2/2;
    
    //Console.WriteLine($"count {0}", media);
    
     Console.WriteLine( (double)media);
     

    
    //Console.WriteLine($"{media} eh o maior");
    

  }
}