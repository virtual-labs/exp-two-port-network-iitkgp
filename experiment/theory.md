### Theory
<div>
<br>&nbsp;&nbsp;&nbsp;
 Consider a passive two-port (4-terminal ) network as shown in figure 1.<br><br>							
<div align="center">
<img src="images/main tp.jpg" />

***Fig.1 : Circuit diagram***
</div>
	<br>
<p>The voltage V<sub>1</sub>, V<sub>1</sub>  and current I<sub>1</sub>, I<sub>2</sub> can be related in terms of Z-parameters as shown below.</p>
									
									
$$ \begin {bmatrix}
	V_1 \\
	V_2
	\end {bmatrix} =
	\begin {bmatrix}
	Z_{11} & Z_{12} \\
	Z_{21} & Z_{22}
	\end {bmatrix} * 
	\begin {bmatrix}
	I_1 \\
	I_2
	\end {bmatrix} $$
	
									
$$ where \ Z_{11} = ( \frac{V_1}{I_1})_{I_2 = 0} \ \ \  Z_{12} = ( \frac {V_1}{I_2})_{I_1 = 0}  $$
	
$$ Z = ( \frac {V_2}{I_1})_{I_2 = 0} \ \ \ \ and \ Z_{22} = ( \frac {V_2}{I_2})_{I_1 = 0} $$


<p>Lastly, voltage V<sub>1</sub> and current `I<sub>1</sub> can be expressed in terms of volatge V<sub>2</sub> and current (-I<sub>2</sub>) using ABCD parameters.</p>
									
									
$$ \begin {bmatrix}
	V_1 \\
	I_1
	\end {bmatrix} =
	\begin {bmatrix}
	A & B \\
	C & D
	\end {bmatrix} * 
	\begin {bmatrix}
	V_2 \\
	-I_2
	\end {bmatrix} $$
	
									
$$ where \ A = ( \frac{V_1}{V_2})_{I_2 = 0} \ \ \  -B = ( \frac {V_1}{I_2})_{V_2 = 0}  $$
	
$$ C = ( \frac {I_1}{V_2})_{I_2 = 0} \ \ \ \ and -D = ( \frac {I_1}{I_2})_{V_2 = 0} $$


<p>Lastly, voltage V<sub>1</sub> and current `I<sub>1</sub> can be expressed in terms of volatge V<sub>2</sub> and current (-I<sub>2</sub>) using ABCD parameters.</p>
									
									
$$ \begin {bmatrix}
	V_1 \\
	I_1
	\end {bmatrix} =
	\begin {bmatrix}
	A & B \\
	C & D
	\end {bmatrix} * 
	\begin {bmatrix}
	V_2 \\
	-I_2
	\end {bmatrix} $$
	
									
$$ where \ A = ( \frac{V_1}{V_2})_{I_2 = 0} \ \ \  -B = ( \frac {V_1}{I_2})_{V_2 = 0}  $$
	
$$ C = ( \frac {I_1}{V_2})_{I_2 = 0} \ \ \ \ and -D = ( \frac {I_1}{I_2})_{V_2 = 0} $$

									
										
<p>Lastly, voltage V<sub>1</sub> and current I<sub>1</sub> can be expressed in terms of volatge V<sub>2</sub> and current (-I<sub>2</sub>) using ABCD parameters.</p>
									
									
$$ \begin {bmatrix}
	V_1 \\
	I_1
	\end {bmatrix} =
	\begin {bmatrix}
	A & B \\
	C & D
	\end {bmatrix} * 
	\begin {bmatrix}
	V_2 \\
	-I_2
	\end {bmatrix} $$
	
									
$$ where \ A = ( \frac{V_1}{V_2})_{I_2 = 0} \ \ \  -B = ( \frac {V_1}{I_2})_{V_2 = 0}  $$
	
$$ C = ( \frac {I_1}{V_2})_{I_2 = 0} \ \ \ \ and -D = ( \frac {I_1}{I_2})_{V_2 = 0} $$
	
									
<span style="background-color: rgb(255, 255, 255); font-size: 21px; "><b>Cascading Mode Circuit Diagram:</b></span>
<br>									
<p>Circuit diagram for cascading mode is shown in figure 2.</p>
<div align="center">
<img src="images/tp main 2.JPG" /> 
	
***Fig.2 : Circuit Diagram for Cascading Mode***
</div>
<br>	
<p>If two networks M and N connected in cascade then the total transmission matrix T of the overall network is given by,</p>
<br>
<p style ="text-align:center;">
$$T = T_M * T_N$$
</p>
									
				<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>					
