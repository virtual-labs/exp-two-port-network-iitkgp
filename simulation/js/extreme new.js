var chk=0;
//var dr1,dr2,dr3,dr4,dr5,dr6;
var R1, R2, R3, R4, R5, R6,  V, XL1, XL2, XC1;
var w;
//var a11,a22,r11,r22;
/////////////////////////////// The code starts from here/////////////////////////////////////
function simulateA()
	{   var A, C;
	
	
		if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{
									
			if (  s4==1 && s1==1 && s2==1 && s3==3 )
					
			{	
			    p=((R5*R4)/(R5+R4))+R2+R6;
				q=((p*R3)/(p+R3))+R1;
				V1=V;
				I1=V1/q;
				V2=((I1*R3*R4*R5)/((R4+R5)*(p+R3)));
				Z11=V1/I1;
				Z21=V2/I1;
				I2=I1*0;
			
				document.f1.VA11.value=V1; document.f1.AA11.value=I1; document.f1.VA22.value=V2; document.f1.AA22.value=I2;
				document.f1.Z11A.value=Z11; document.f1.Z21A.value=Z21;
				
			}
		
		 if(s4==1 && s1==1 && s2==1 && s3==1 || s4==1 && s1==1 && s2==1 && s3==2 || s4==1 && s1==1 && s2==2 && s3==1 || s4==1 && s1==1 && s2==2 && s3==2 || s4==1 && s1==1 && s2==2 && s3==3 || s4==1 && s1==1 && s2==3 && s3==1 || s4==1 && s1==1 && s2==3 && s3==2 || s4==1 && s1==1 && s2==3 && s3==3 )
		{			
       alert('Z parameter Case 1:This is improper circuit connection for finding Z11, Z21. Please apply Power to Input port and set Output port to Intermediate.');
		
			}
		}
		
		}
if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			
			
				{
               					
		if ( s1==1 &&  s4==2 && s2==3 && s3==1 )
			 	 
			{
				p=(((R6+R2+R3)*R4)/(R6+R2+R3+R4));
				q=(p*R5)/(p+R5);
				V2=V;
				I2=V2/q;
				I1=I2*0;
				s=(R4*R3*R5*I2);
				t=((R6+R2+R3+R4)*(R5+p));
				V1=s/t;
				Z12=V1/I2;
				Z22=V2/I2;
			
				document.f1.VA11.value=V1; document.f1.AA11.value=I1; document.f1.VA22.value=V2; document.f1.AA22.value=I2;
				document.f1.Z12A.value=Z12; document.f1.Z22A.value=Z22;document.f1.Z11A.value=0; document.f1.Z21A.value=0;
			
			}
		 if(s4==2 && s1==1 && s2==1 && s3==1 || s4==2 && s1==1 && s2==1 && s3==2 || s4==2 && s1==1 && s2==1 && s3==3 || s4==2 && s1==1 && s2==2 && s3==1 || s4==2 && s1==1 && s2==2 && s3==2 || s4==2 && s1==1 && s2==2 && s3==3 || s4==2 && s1==1 && s2==3 && s3==2 || s4==2 && s1==1 && s2==3 && s3==3 )	
		{
		alert('Z parameter Case 2: This is improper circuit connection for finding Z12, Z22. Please apply Power to Output port and set Input port to Intermediate.');	
		
			}
		}
		}
		
if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{		
			
		if (  s4==1 && s1==2 && s2==1 && s3==2  )
		 
			{
				p=(((R2+R6)*R3)/(R2+R6+R3))+R1;
				V1=V;
				I1=V1/p;
				I2=-((I1*R3)/(R2+R3+R6));
				V2=V1*0;
				Y11=I1/V1;
				Y21=I2/V1;
			
				document.f1.VA3.value=V1; document.f1.AA3.value=I1; document.f1.VA33.value=V2; document.f1.AA33.value=I2;
				document.f1.Y11A.value=Y11; document.f1.Y21A.value=Y21;
				
			}

			 if(s4==1 && s1==2 && s2==1 && s3==1 || s4==1 && s1==2 && s2==1 && s3==3 || s4==1 && s1==2 && s2==2 && s3==1 || s4==1 && s1==2 && s2==2 && s3==2 || s4==1 && s1==2 && s2==2 && s3==3 || s4==1 && s1==2 && s2==3 && s3==1 || s4==1 && s1==2 && s2==3 && s3==2 || s4==1 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 1:This is improper circuit connection for finding Y11, Y21. Please apply Power to Input port and set Output port to Short.');
		
			}
		
			}
		}
if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{		
		if ( s4==2 &&  s1==2 && s2==2 && s3==1 )
		 
			{
				p=((R1*R3)/(R1+R3))+R2+R6;
				q=((p*R4)/(p+R4));
				t=((q*R5)/(q+R5));
				V2=V;
				I2=V2/t;
				V1=V2*0;
				I1=-((R3*R4*R5*I2)/((R1+R3)*(p+R4)*(q+R5)));
				Y12=I1/V2;
				Y22=I2/V2;
			
				document.f1.VA3.value=V1; document.f1.AA3.value=I1; document.f1.VA33.value=V2; document.f1.AA33.value=I2;
				document.f1.Y12A.value=Y12; document.f1.Y22A.value=Y22;document.f1.Y11A.value=0; document.f1.Y21A.value=0;
				
			}
			
			if(s4==2 && s1==2 && s2==1 && s3==1 || s4==2 && s1==2 && s2==1 && s3==2 || s4==2 && s1==2 && s2==1 && s3==3 || s4==2 && s1==2 && s2==2 && s3==2 || s4==2 && s1==2 && s2==2 && s3==3 || s4==2 && s1==2 && s2==3 && s3==1 || s4==2 && s1==2 && s2==3 && s3==2 || s4==2 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 2: This is improper circuit connection for finding Y12, Y22. Please apply Power to Output port and set Input port to Short.');
		
			}
			
	
			}
		}
if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{
			
		if (  s4==1 && s1==3 && s2==1 && s3==2  )
			 
			{
				p=(((R2+R6)*R3)/(R2+R6+R3))+R1;
				V1=V;
				I1=V1/p;
				I2=-((I1*R3)/(R2+R3+R6));
				V2=V1*0;
				h11=V1/I1;
				h21=I2/I1;
				
				document.f1.VA4.value=V1; document.f1.AA4.value=I1; document.f1.VA44.value=V2; document.f1.AA44.value=I2;
				document.f1.h11A.value=h11; document.f1.h21A.value=h21;
				
				
			}
		 if(s4==1 && s1==3 && s2==1 && s3==1 || s4==1 && s1==3 && s2==1 && s3==3 || s4==1 && s1==3 && s2==2 && s3==1 || s4==1 && s1==3 && s2==2 && s3==2 || s4==1 && s1==3 && s2==2 && s3==3 || s4==1 && s1==3 && s2==3 && s3==1 || s4==1 && s1==3 && s2==3 && s3==2 || s4==1 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 1:This is improper circuit connection for finding h11, h21. Please apply Power to Input port and set Output port to Short.');
		
			}	
			}
		}
if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{
		if ( s4==2 && s1==3 && s2==3 && s3==1 )
			 
			{
				p=(((R2+R3+R6)*R4)/(R2+R3+R6+R4));
				q=((p*R5)/(p+R5));
				V2=V;
				I2=V2/q;
				V1=((R4*R3*R5*I2)/((R2+R3+R6+R4)*(R5+p)));
				h12=V1/V2;
				h22=I2/V2;
				
				document.f1.VA4.value=V1; document.f1.AA4.value=0; document.f1.VA44.value=V2; document.f1.AA44.value=I2;
				document.f1.h12A.value=h12; document.f1.h22A.value=h22;document.f1.h11A.value=0; document.f1.h21A.value=0;
				
			}
		 	
		 if(s4==2 && s1==3 && s2==1 && s3==1 || s4==2 && s1==3 && s2==1 && s3==2 || s4==2 && s1==3 && s2==1 && s3==3 || s4==2 && s1==3 && s2==2 && s3==1 || s4==2 && s1==3 && s2==2 && s3==2 || s4==2 && s1==3 && s2==2 && s3==3 || s4==2 && s1==3 && s2==3 && s3==2 || s4==2 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 2: This is improper circuit connection for finding h12, h22. Please apply Power to Output port and set Input port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{
			
			if (  s4==1 && s1==4 && s2==1 && s3==3  )
			 
			{
				p=((R4*R5)/(R4+R5))+R2+R6;
				q=((p*R3)/(p+R3))+R1;
				V1=V;
				I1=V1/q;
				V2=((R4*R5*I1*R3)/((R4+R5)*(p+R3)));
				I2=I1*0;
				A=V1/V2;
				C=I1/V2;
				
				document.f1.VA5.value=V1; document.f1.AA5.value=I1; document.f1.VA55.value=V2; document.f1.AA55.value=I2;
				document.f1.AA.value=A; document.f1.CA.value=C;
				
			}
		if(s4==1 && s1==4 && s2==1 && s3==1 || s4==1 && s1==4 && s2==1 && s3==2 || s4==1 && s1==4 && s2==2 && s3==1 || s4==1 && s1==4 && s2==2 && s3==2 || s4==1 && s1==4 && s2==2 && s3==3 || s4==1 && s1==4 && s2==3 && s3==1 || s4==1 && s1==4 && s2==3 && s3==2 || s4==1 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 1: This is improper circuit connection for finding A, C. Please apply Power to Input port and set Output port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1A').value);
			s2=parseFloat(document.getElementById('SW2A').value);
			s3=parseFloat(document.getElementById('SW3A').value);
			s4=parseFloat(document.getElementById('SW4A').value);
			
			{
			if (s4==2  &&  s1==4 && s2==1 && s3==2   )
		 
			{
				p=(((R2+R6)*R3)/(R2+R6+R3))+R1;
				V1=V;
				I1=V1/p;
				I2=((I1*R3)/(R2+R6+R3));
				B=V1/I2;
				D=I1/I2;
				output=((A*D)-(B*C));
				
				document.f1.VA5.value=V1; document.f1.AA5.value=I1; document.f1.VA55.value=0; document.f1.AA55.value=I2;
				document.f1.BA.value=B; document.f1.DA.value=D;document.f1.AA.value=0; document.f1.CA.value=0;
				
			}
		if(s4==2 && s1==4 && s2==1 && s3==1 || s4==2 && s1==4 && s2==1 && s3==3 || s4==2 && s1==4 && s2==2 && s3==1 || s4==2 && s1==4 && s2==2 && s3==2 || s4==2 && s1==4 && s2==2 && s3==3 || s4==2 && s1==4 && s2==3 && s3==1 || s4==2 && s1==4 && s2==3 && s3==2 || s4==2 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 2: This is improper circuit connection for finding B, D . Please apply Power to Input port and set Output port to Short.');
		
			}		
			}
	
		}	
		
	else{
			alert("Please switch on the Power supply and follow the instructions carefully");
		}		
		
		
	}
	////////////////////////////////// N-Network /////////////////////////////////////////////////////////////////////
	function simulateB()
	{   var A, C;
		if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{
									
			if ( s4==1&& s1==1&& s2==1&&s3==3 )
					
			{	
			    V1=V;
				I1=V1/(XC1+XL1);
				V2=XL1*I1;
				I2=I1*0;
				Z11=V1/I1;
				Z21=V2/I1;
				document.f1.VB11.value=V1; document.f1.AB11.value=I1; document.f1.VB22.value=V2; document.f1.AB22.value=I2;
				document.f1.Z11B.value=Z11; document.f1.Z21B.value=Z21;
			}
		
		 if(s4==1 && s1==1 && s2==1 && s3==1 || s4==1 && s1==1 && s2==1 && s3==2 || s4==1 && s1==1 && s2==2 && s3==1 || s4==1 && s1==1 && s2==2 && s3==2 || s4==1 && s1==1 && s2==2 && s3==3 || s4==1 && s1==1 && s2==3 && s3==1 || s4==1 && s1==1 && s2==3 && s3==2 || s4==1 && s1==1 && s2==3 && s3==3 )
		{			
       alert('Z parameter Case 1:This is improper circuit connection for finding Z11, Z21. Please apply Power to Input port and set Output port to Intermediate.');
		
			}
		}
		
		}
	if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			
			
				{
               					
		if ( s1==1 &&  s4==2 && s2==3 && s3==1 )
			 	 
			{
				V2=V;
				I2=V2/(XL2+XL1);
				V1=XL1*I2;
				I1=I2*0;
				Z12=V1/I2;
				Z22=V2/I2;
				
			
				document.f1.VB11.value=V1; document.f1.AB11.value=I1; document.f1.VB22.value=V2; document.f1.AB22.value=I2;
				document.f1.Z12B.value=Z12; document.f1.Z22B.value=Z22;document.f1.Z11B.value=0; document.f1.Z21B.value=0;
			
			}
		 if(s4==2 && s1==1 && s2==1 && s3==1 || s4==2 && s1==1 && s2==1 && s3==2 || s4==2 && s1==1 && s2==1 && s3==3 || s4==2 && s1==1 && s2==2 && s3==1 || s4==2 && s1==1 && s2==2 && s3==2 || s4==2 && s1==1 && s2==2 && s3==3 || s4==2 && s1==1 && s2==3 && s3==2 || s4==2 && s1==1 && s2==3 && s3==3 )	
		{
		alert('Z parameter Case 2: This is improper circuit connection for finding Z12, Z22. Please apply Power to Output port and set Input port to Intermediate.');	
		
			}
		}
		}	
	if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{		
			
		if (  s4==1 && s1==2 && s2==1 && s3==2  )
		 
			{
			V1=V;
				p=((XL1*XL2)/(XL1+XL2))+XC1;
				I1=V1/p;
				I2=-(I1*XL1/(XL1+XL2));
				V2=V1*0;
				Y11=I1/V1;
				Y21=I2/V1;
				
			
				document.f1.VB3.value=V1; document.f1.AB3.value=I1; document.f1.VB33.value=V2; document.f1.AB33.value=I2;
				document.f1.Y11B.value=Y11; document.f1.Y21B.value=Y21;
				
			}

			 if(s4==1 && s1==2 && s2==1 && s3==1 || s4==1 && s1==2 && s2==1 && s3==3 || s4==1 && s1==2 && s2==2 && s3==1 || s4==1 && s1==2 && s2==2 && s3==2 || s4==1 && s1==2 && s2==2 && s3==3 || s4==1 && s1==2 && s2==3 && s3==1 || s4==1 && s1==2 && s2==3 && s3==2 || s4==1 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 1:This is improper circuit connection for finding Y11, Y21. Please apply Power to Input port and set Output port to Short.');
		
			}
		
			}
		}	
	if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{		
		if ( s4==2 &&  s1==2 && s2==2 && s3==1 )
		 
			{
				V2=V;
				p=((XC1*XL1)/(XC1+XL1))+XL2;
				I2=V2/p;
				V1=V2*0;
				I1=-((I2*XL1)/(XC1+XL1));
				Y12=I1/V2;
				Y22=I2/V2;
			
				document.f1.VB3.value=V1; document.f1.AB3.value=I1; document.f1.VB33.value=V2; document.f1.AB33.value=I2;
				document.f1.Y12B.value=Y12; document.f1.Y22B.value=Y22;document.f1.Y11B.value=0; document.f1.Y21B.value=0;
				
			}
			
			if(s4==2 && s1==2 && s2==1 && s3==1 || s4==2 && s1==2 && s2==1 && s3==2 || s4==2 && s1==2 && s2==1 && s3==3 || s4==2 && s1==2 && s2==2 && s3==2 || s4==2 && s1==2 && s2==2 && s3==3 || s4==2 && s1==2 && s2==3 && s3==1 || s4==2 && s1==2 && s2==3 && s3==2 || s4==2 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 2: This is improper circuit connection for finding Y12, Y22. Please apply Power to Output port and set Input port to Short.');
		
			}
			
	
			}
		}	
	if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{
			
		if (  s4==1 && s1==3 && s2==1 && s3==2  )
			 
			{
				V1=V;
				p=((XL1*XL2)/(XL1+XL2))+XC1;
				I1=V1/p;
				I2=-(I1*XL1/(XL1+XL2));
				V2=V1*0;
				h11=V1/I1;
				h21=I2/I1; 
				
				document.f1.VB4.value=V1; document.f1.AB4.value=I1; document.f1.VB44.value=V2; document.f1.AB44.value=I2;
				document.f1.h11B.value=h11; document.f1.h21B.value=h21;
				
				
			}
		 if(s4==1 && s1==3 && s2==1 && s3==1 || s4==1 && s1==3 && s2==1 && s3==3 || s4==1 && s1==3 && s2==2 && s3==1 || s4==1 && s1==3 && s2==2 && s3==2 || s4==1 && s1==3 && s2==2 && s3==3 || s4==1 && s1==3 && s2==3 && s3==1 || s4==1 && s1==3 && s2==3 && s3==2 || s4==1 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 1:This is improper circuit connection for finding h11, h21. Please apply Power to Input port and set Output port to Short.');
		
			}	
			}
		}
if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{
		if ( s4==2 && s1==3 && s2==3 && s3==1 )
			 
			{
				V2=V;
				I2=V2/(XL2+XL1);
				V1=XL1*I2;
				I1=I2*0;
				h12=V1/V2;
				h22=I2/V2;
				
				document.f1.VB4.value=V1; document.f1.AB4.value=0; document.f1.VB44.value=V2; document.f1.AB44.value=I2;
				document.f1.h12B.value=h12; document.f1.h22B.value=h22;document.f1.h11B.value=0; document.f1.h21B.value=0;
				
			}
		 	
		 if(s4==2 && s1==3 && s2==1 && s3==1 || s4==2 && s1==3 && s2==1 && s3==2 || s4==2 && s1==3 && s2==1 && s3==3 || s4==2 && s1==3 && s2==2 && s3==1 || s4==2 && s1==3 && s2==2 && s3==2 || s4==2 && s1==3 && s2==2 && s3==3 || s4==2 && s1==3 && s2==3 && s3==2 || s4==2 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 2: This is improper circuit connection for finding h12, h22. Please apply Power to Output port and set Input port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{
			
			if (  s4==1 && s1==4 && s2==1 && s3==3  )
			 
			{
				V1=V;
				I1=V1/(XC1+XL1);
				V2=XL1*I1;
				I2=I1*0;
				A=V1/V2;
				C=I1/V2;
				
				document.f1.VB5.value=V1; document.f1.AB5.value=I1; document.f1.VB55.value=V2; document.f1.AB55.value=I2;
				document.f1.AB.value=A; document.f1.CB.value=C;
				
			}
		if(s4==1 && s1==4 && s2==1 && s3==1 || s4==1 && s1==4 && s2==1 && s3==2 || s4==1 && s1==4 && s2==2 && s3==1 || s4==1 && s1==4 && s2==2 && s3==2 || s4==1 && s1==4 && s2==2 && s3==3 || s4==1 && s1==4 && s2==3 && s3==1 || s4==1 && s1==4 && s2==3 && s3==2 || s4==1 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 1: This is improper circuit connection for finding A, C. Please apply Power to Input port and set Output port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1B').value);
			s2=parseFloat(document.getElementById('SW2B').value);
			s3=parseFloat(document.getElementById('SW3B').value);
			s4=parseFloat(document.getElementById('SW4B').value);
			
			{
			if (s4==2  &&  s1==4 && s2==1 && s3==2   )
		 
			{
				V1=V;
				p=((XL1*XL2)/(XL1+XL2))+XC1;
				I1=V1/p;
				I2=(I1*XL1/(XL1+XL2));
				V2=V1*0;
				B=V1/I2;
				D=I1/I2;
				product=((A*D)-(B*C));
				
				document.f1.VB5.value=V1; document.f1.AB5.value=I1; document.f1.VB55.value=0; document.f1.AB55.value=I2;
				document.f1.BB.value=B; document.f1.DB.value=D;document.f1.AB.value=0; document.f1.CB.value=0;
				
			}
		if(s4==2 && s1==4 && s2==1 && s3==1 || s4==2 && s1==4 && s2==1 && s3==3 || s4==2 && s1==4 && s2==2 && s3==1 || s4==2 && s1==4 && s2==2 && s3==2 || s4==2 && s1==4 && s2==2 && s3==3 || s4==2 && s1==4 && s2==3 && s3==1 || s4==2 && s1==4 && s2==3 && s3==2 || s4==2 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 2: This is improper circuit connection for finding B, D . Please apply Power to Input port and set Output port to Short.');
		
			}		
			}
	
		}	
			
		else{
			alert("Please switch on the supply and follow the instruction carefully.");
		}	
	}
	////////////////////////////////// MN-Network /////////////////////////////////////////////////////////////////////
	function simulateC()
	{   var A, C;
		if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{
									
			if ( s4==1&& s1==1&& s2==1&&s3==3 )
					
			{	
			   p=((R5*(XL1+XC1))/(R5+XL1+XC1));
				q=((p*R4)/(p+R4));
				s=((R3*(R2+q+R6))/(R3+q+R2+R6));
				V1=V;
				I1=(V1/(s+R1));
				I2=I1*0;
				V2=(XL1*I1*R3*R4*R5)/((p+R4)*(R5+XL1+XC1)*(R3+q+R2+R6));
				Z11=V1/I1;
				Z21=V2/I1;
				document.f1.VC11.value=V1; document.f1.AC11.value=I1; document.f1.VC22.value=V2; document.f1.AC22.value=I2;
				document.f1.Z11C.value=Z11; document.f1.Z21C.value=Z21;
			}
		
		 if(s4==1 && s1==1 && s2==1 && s3==1 || s4==1 && s1==1 && s2==1 && s3==2 || s4==1 && s1==1 && s2==2 && s3==1 || s4==1 && s1==1 && s2==2 && s3==2 || s4==1 && s1==1 && s2==2 && s3==3 || s4==1 && s1==1 && s2==3 && s3==1 || s4==1 && s1==1 && s2==3 && s3==2 || s4==1 && s1==1 && s2==3 && s3==3 )
		{			
       alert('Z parameter Case 1:This is improper circuit connection for finding Z11, Z21. Please apply Power to Input port and set Output port to Intermediate.');
		
			}
		}
		
		}
	if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			
			
				{
               					
		if ( s1==1 &&  s4==2 && s2==3 && s3==1 )
			 	 
			{
				p=(((R2+R3+R6)*R4)/(R2+R3+R6+R4));
				q=((p*R5)/(p+R5));
				s=(((q+XC1)*XL1)/(q+XC1+XL1));
				V2=V;
				I2=(V2/(s+XL2));
				V1=((R3*R4*R5*XL1*I2)/((R2+R3+R6+R4)*(p+R5)*(q+XC1+XL1)));
				I1=I2*0;
				Z12=V1/I2;
				Z22=V2/I2;
			
				document.f1.VC11.value=V1; document.f1.AC11.value=I1; document.f1.VC22.value=V2; document.f1.AC22.value=I2;
				document.f1.Z12C.value=Z12; document.f1.Z22C.value=Z22;document.f1.Z11C.value=0; document.f1.Z21C.value=0;
			
			}
		 if(s4==2 && s1==1 && s2==1 && s3==1 || s4==2 && s1==1 && s2==1 && s3==2 || s4==2 && s1==1 && s2==1 && s3==3 || s4==2 && s1==1 && s2==2 && s3==1 || s4==2 && s1==1 && s2==2 && s3==2 || s4==2 && s1==1 && s2==2 && s3==3 || s4==2 && s1==1 && s2==3 && s3==2 || s4==2 && s1==1 && s2==3 && s3==3 )	
		{
		alert('Z parameter Case 2: This is improper circuit connection for finding Z12, Z22. Please apply Power to Output port and set Input port to Intermediate.');	
		
			}
		}
		}	
	if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{		
			
		if (  s4==1 && s1==2 && s2==1 && s3==2  )
		 
			{
			p=((XL2*XL1)/(XL2+XL1));
				q=(((p+XC1)*R5)/(p+XC1+R5));
				s=((q*R4)/(q+R4));
				t=((s+R2+R6)*R3)/(s+R2+R3+R6);
				V1=V;
				V2=V1*0;
				I1=(V1/(R1+t));
				I2=-((XL1*I1*R5*R4*R3)/((XL2+XL1)*(p+XC1+R5)*(s+R2+R3+R6)*(q+R4)));
				Y11=I1/V1;
				Y21=I2/V1;
				
			
				document.f1.VC3.value=V1; document.f1.AC3.value=I1; document.f1.VC33.value=V2; document.f1.AC33.value=I2;
				document.f1.Y11C.value=Y11; document.f1.Y21C.value=Y21;
				
			}

			 if(s4==1 && s1==2 && s2==1 && s3==1 || s4==1 && s1==2 && s2==1 && s3==3 || s4==1 && s1==2 && s2==2 && s3==1 || s4==1 && s1==2 && s2==2 && s3==2 || s4==1 && s1==2 && s2==2 && s3==3 || s4==1 && s1==2 && s2==3 && s3==1 || s4==1 && s1==2 && s2==3 && s3==2 || s4==1 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 1:This is improper circuit connection for finding Y11, Y21. Please apply Power to Input port and set Output port to Short.');
		
			}
		
			}
		}	
	if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{		
		if ( s4==2 &&  s1==2 && s2==2 && s3==1 )
		 
			{
				p=((R1*R3)/(R1+R3));
				q=(((p+R2+R6)*R4)/(p+R2+R6+R4));
				s=((q*R5)/(q+R5));
				t=(((s+XC1)*XL1)/(s+XC1+XL1));
				V2=V;
				V1=0;
				I2=(V2/(t+XL2));
				I1=-(I2*XL1*R5*R4*R3)/((s+XC1+XL1)*(q+R5)*(p+R2+R6+R4)*(R1+R3));
				Y12=I1/V2;
				Y22=I2/V2;
			
				document.f1.VC3.value=V1; document.f1.AC3.value=I1; document.f1.VC33.value=V2; document.f1.AC33.value=I2;
				document.f1.Y12C.value=Y12; document.f1.Y22C.value=Y22;document.f1.Y11C.value=0; document.f1.Y21C.value=0;
				
			}
			
			if(s4==2 && s1==2 && s2==1 && s3==1 || s4==2 && s1==2 && s2==1 && s3==2 || s4==2 && s1==2 && s2==1 && s3==3 || s4==2 && s1==2 && s2==2 && s3==2 || s4==2 && s1==2 && s2==2 && s3==3 || s4==2 && s1==2 && s2==3 && s3==1 || s4==2 && s1==2 && s2==3 && s3==2 || s4==2 && s1==2 && s2==3 && s3==3 )
		{			
       alert('Y parameter Case 2: This is improper circuit connection for finding Y12, Y22. Please apply Power to Output port and set Input port to Short.');
		
			}
			
	
			}
		}	
	if (chk==1 )
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{
			
		if (  s4==1 && s1==3 && s2==1 && s3==2  )
			 
			{
				V1=V;
				p=((XL1*XL2)/(XL1+XL2))+XC1;
				I1=V1/p;
				I2=-(I1*XL1/(XL1+XL2));
				V2=V1*0;
				h11=V1/I1;
				h21=I2/I1; 
				
				document.f1.VC4.value=V1; document.f1.AC4.value=I1; document.f1.VC44.value=V2; document.f1.AC44.value=I2;
				document.f1.h11C.value=h11; document.f1.h21C.value=h21;
				
				
			}
		 if(s4==1 && s1==3 && s2==1 && s3==1 || s4==1 && s1==3 && s2==1 && s3==3 || s4==1 && s1==3 && s2==2 && s3==1 || s4==1 && s1==3 && s2==2 && s3==2 || s4==1 && s1==3 && s2==2 && s3==3 || s4==1 && s1==3 && s2==3 && s3==1 || s4==1 && s1==3 && s2==3 && s3==2 || s4==1 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 1:This is improper circuit connection for finding h11, h21. Please apply Power to Input port and set Output port to Short.');
		
			}	
			}
		}
if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{
		if ( s4==2 && s1==3 && s2==3 && s3==1 )
			 
			{
				p=(((R2+R3+R6)*R4)/(R2+R3+R6+R4));
				q=((p*R5)/(p+R5));
				s=(((q+XC1)*XL1)/(q+XC1+XL1));
				V2=V;
				I2=(V2/(s+XL2));
				V1=((R3*R4*R5*XL1*I2)/((R2+R3+R6+R4)*(p+R5)*(q+XC1+XL1)));
				I1=I2*0;
				h12=V1/V2;
				h22=I2/V2;
				document.f1.VC4.value=V1; document.f1.AC4.value=0; document.f1.VC44.value=V2; document.f1.AC44.value=I2;
				document.f1.h12C.value=h12; document.f1.h22C.value=h22;document.f1.h11C.value=0; document.f1.h21C.value=0;
				
			}
		 	
		 if(s4==2 && s1==3 && s2==1 && s3==1 || s4==2 && s1==3 && s2==1 && s3==2 || s4==2 && s1==3 && s2==1 && s3==3 || s4==2 && s1==3 && s2==2 && s3==1 || s4==2 && s1==3 && s2==2 && s3==2 || s4==2 && s1==3 && s2==2 && s3==3 || s4==2 && s1==3 && s2==3 && s3==2 || s4==2 && s1==3 && s2==3 && s3==3 )
		{			
       alert('h parameter Case 2: This is improper circuit connection for finding h12, h22. Please apply Power to Output port and set Input port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{
			
			if (  s4==1 && s1==4 && s2==1 && s3==3  )
			 
			{
				p=((R5*(XL1+XC1))/(R5+XL1+XC1));
				q=((p*R4)/(p+R4));
				s=((R3*(R2+q+R6))/(R3+q+R2+R6));
				V1=V;
				I1=(V1/(s+R1));
				I2=I1*0;
				V2=(XL1*I1*R3*R4*R5)/((p+R4)*(R5+XL1+XC1)*(R3+q+R2+R6));
				A=V1/V2;
				C=I1/V2;
				
				document.f1.VC5.value=V1; document.f1.AC5.value=I1; document.f1.VC55.value=V2; document.f1.AC55.value=I2;
				document.f1.AC.value=A; document.f1.CC.value=C;
				
			}
		if(s4==1 && s1==4 && s2==1 && s3==1 || s4==1 && s1==4 && s2==1 && s3==2 || s4==1 && s1==4 && s2==2 && s3==1 || s4==1 && s1==4 && s2==2 && s3==2 || s4==1 && s1==4 && s2==2 && s3==3 || s4==1 && s1==4 && s2==3 && s3==1 || s4==1 && s1==4 && s2==3 && s3==2 || s4==1 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 1: This is improper circuit connection for finding A, C. Please apply Power to Input port and set Output port to Intermediate.');
		
			}		
		
			
		
			}
		}
		if (chk==1)
		{	
			get_input();
			s1=parseFloat(document.getElementById('SW1C').value);
			s2=parseFloat(document.getElementById('SW2C').value);
			s3=parseFloat(document.getElementById('SW3C').value);
			s4=parseFloat(document.getElementById('SW4C').value);
			
			{
			if (s4==2  &&  s1==4 && s2==1 && s3==2   )
		 
			{
				p=((XL2*XL1)/(XL2+XL1));
				q=(((p+XC1)*R5)/(p+XC1+R5));
				s=((q*R4)/(q+R4));
				t=((s+R2+R6)*R3)/(s+R2+R3+R6);
				V1=V;
				V2=V1*0;
				I1=(V1/(R1+t));
				I2=((XL1*I1*R5*R4*R3)/((XL2+XL1)*(p+XC1+R5)*(s+R2+R3+R6)*(q+R4)));
				B=V1/I2;
				D=I1/I2;
				out=((A*D)-(B*C));
				
				document.f1.VC5.value=V1; document.f1.AC5.value=I1; document.f1.VC55.value=0; document.f1.AC55.value=I2;
				document.f1.BC.value=B; document.f1.DC.value=D;document.f1.AC.value=0; document.f1.CC.value=0;
				
			}
		if(s4==2 && s1==4 && s2==1 && s3==1 || s4==2 && s1==4 && s2==1 && s3==3 || s4==2 && s1==4 && s2==2 && s3==1 || s4==2 && s1==4 && s2==2 && s3==2 || s4==2 && s1==4 && s2==2 && s3==3 || s4==2 && s1==4 && s2==3 && s3==1 || s4==2 && s1==4 && s2==3 && s3==2 || s4==2 && s1==4 && s2==3 && s3==3 )
		{			
       alert('ABCD parameter Case 2: This is improper circuit connection for finding B, D . Please apply Power to Input port and set Output port to Short.');
		
			}		
			}
	
		}	
			
		else{
			alert("Please switch on the supply and follow the instruction carefully.");
		}	
	}
	
function changeImage() {
	
		var image = document.getElementById('myImage');
		var image2= document.getElementById('2ndImage');
		var image3=document.getElementById('myImage2');
		var image4= document.getElementById('2ndImage2');
		var image5=document.getElementById('myImage3');
		var image6= document.getElementById('2ndImage3');
		
		var power = document.getElementById('image') ;
		var power2= document.getElementById('Rimage') ;
		var power3= document.getElementById('image2') ;
		var power4= document.getElementById('Rimage2') ;
		var power5=  document.getElementById('image3') ;
		var power6=  document.getElementById('Rimage3') ;
		
		if (image.src.match("s1")) {
			document.f1.f.setAttribute('readonly', 'readonly');
			document.f1.vin.setAttribute('readonly', 'readonly');
			document.f1.r1.setAttribute('readonly', 'readonly');
			document.f1.r2.setAttribute('readonly', 'readonly');
			document.f1.r3.setAttribute('readonly', 'readonly');
			document.f1.r4.setAttribute('readonly', 'readonly');
			document.f1.r5.setAttribute('readonly', 'readonly');
			document.f1.r6.setAttribute('readonly', 'readonly');
			document.f1.l1.setAttribute('readonly', 'readonly');
			document.f1.l2.setAttribute('readonly', 'readonly');
			document.f1.c1.setAttribute('readonly', 'readonly');
			image.src = "./images/s2.png";
			image2.src= "./images/s2.png";
			image3.src= "./images/s2.png";
			image4.src= "./images/s2.png";
			image5.src= "./images/s2.png";
			image6.src= "./images/s2.png";
            power.src = "./images/lumi.png";
   			power2.src = "./images/lumi2.png";
			power3.src = "./images/NlumiLeft.png";
   			power4.src = "./images/Nlumi2Right.png";
			power5.src = "./images/ClumiLeft.png";
			power6.src = "./images/Clumi2Right.png";
			chk=1;
		}	
		else {
			image.src = "./images/s1.png"; chk=0;
			image2.src = "./images/s1.png";
			image3.src = "./images/s1.png";
			image4.src = "./images/s1.png";
			image5.src = "./images/s1.png";
			image6.src = "./images/s1.png";
			 power.src = "./images/RunoffPower.png";
			 power2.src = "./images/RunoffPower2.png";
			 power3.src = "./images/NPLeft.png";
			 power4.src = "./images/NPRight.png"; 
			  power5.src = "./images/CPLeft.png";
			 power6.src = "./images/CPRight.png";
			 
			document.f1.f.removeAttribute('readonly');
			document.f1.vin.removeAttribute('readonly');
			document.f1.r1.removeAttribute('readonly');
			document.f1.r2.removeAttribute('readonly');
			document.f1.r3.removeAttribute('readonly');
			document.f1.r4.removeAttribute('readonly');
			document.f1.r5.removeAttribute('readonly');
			document.f1.r6.removeAttribute('readonly');
			document.f1.l1.removeAttribute('readonly');
			document.f1.l2.removeAttribute('readonly');
			document.f1.c1.removeAttribute('readonly');
			resetall();
			
		}
		
	
	}
	
	function resetall()
	{
		document.f1.VA1.value = 0; document.f1.AA1.value = 0; 
		document.f1.VA2.value = 0; document.f1.AA2.value = 0;
		document.f1.VB1.value = 0; document.f1.AB1.value = 0; 
		document.f1.VB2.value = 0; document.f1.AB2.value = 0;
		document.f1.VC1.value = 0; document.f1.AC1.value = 0; 
		document.f1.VC2.value = 0; document.f1.AC2.value = 0;
		
		document.f1.VA11.value = 0; document.f1.AA11.value = 0; 
		document.f1.VA22.value = 0; document.f1.AA22.value = 0;
		document.f1.VB11.value = 0; document.f1.AB11.value = 0; 
		document.f1.VB22.value = 0; document.f1.AB22.value = 0;
		document.f1.VC11.value = 0; document.f1.AC11.value = 0; 
		document.f1.VC22.value = 0; document.f1.AC22.value = 0;
		
		document.f1.Z11A.value = 0; document.f1.Z12A.value = 0; document.f1.Z21A.value = 0; document.f1.Z22A.value = 0; 
		document.f1.Y11A.value = 0; document.f1.Y12A.value = 0; document.f1.Y21A.value = 0; document.f1.Y22A.value = 0; 
		document.f1.h11A.value = 0; document.f1.h12A.value = 0; document.f1.h21A.value = 0; document.f1.h22A.value = 0; 
		document.f1.AA.value = 0; document.f1.BA.value = 0; document.f1.CA.value = 0; document.f1.DA.value = 0; 
		
		document.f1.Z11B.value = 0; document.f1.Z12B.value = 0; document.f1.Z21B.value = 0; document.f1.Z22B.value = 0; 
		document.f1.Y11B.value = 0; document.f1.Y12B.value = 0; document.f1.Y21B.value = 0; document.f1.Y22B.value = 0; 
		document.f1.h11B.value = 0; document.f1.h12B.value = 0; document.f1.h21B.value = 0; document.f1.h22B.value = 0; 
		document.f1.AB.value = 0; document.f1.BB.value = 0; document.f1.CB.value = 0; document.f1.DB.value = 0; 
		
		document.f1.Z11C.value = 0; document.f1.Z12C.value = 0; document.f1.Z21C.value = 0; document.f1.Z22C.value = 0; 
		document.f1.Y11C.value = 0; document.f1.Y12C.value = 0; document.f1.Y21C.value = 0; document.f1.Y22C.value = 0; 
		document.f1.h11C.value = 0; document.f1.h12C.value = 0; document.f1.h21C.value = 0; document.f1.h22C.value = 0; 
		document.f1.AC.value = 0; document.f1.BC.value = 0; document.f1.CC.value = 0; document.f1.DC.value = 0; 
		
	}
	function get_input()
	{
		w=2 * 3.141 * parseFloat(document.getElementById('f').value);
		V=parseFloat(document.getElementById('vin').value);
		R1=parseFloat(document.getElementById('r1').value); 
		R2=parseFloat(document.getElementById('r2').value); 
		R3=parseFloat(document.getElementById('r3').value); 
		R4=parseFloat(document.getElementById('r4').value);
		R5=parseFloat(document.getElementById('r5').value);
		R6=parseFloat(document.getElementById('r6').value);
		XC1=1 / (w * parseFloat(document.getElementById('c1').value));
		XL1=w * parseFloat(document.getElementById('l1').value);
		XL2=w * parseFloat(document.getElementById('l2').value);
	}