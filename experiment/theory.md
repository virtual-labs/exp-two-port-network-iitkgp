### Theory
<div>
<br>&nbsp;&nbsp;&nbsp;
 Consider a passive two-port (4-terminal ) network as shown in figure 1.<br><br>							
<div align="center">
<img src="images/main tp.jpg" />

***Fig.1 : Circuit diagram***
</div>
	<br>
<p>The Voltage V<sub>1</sub>, V<sub>2</sub> and current I<sub>1</sub>, I<sub>2</sub> can be related in terms of Z-parameters as shown below.</p>
															
$$ [[V_1], [V_2]] = [[Z_{11}, Z_{12}], [Z_{21}, Z_{22}]] * [[I_1] , [I_2] \ where $$
										
									
$$ Z_{11} = (V_1/I_1)_(I_2 = 0) \ \ \ Z_{21} = (V_2/I_1)_(I_2 = 0) \ and $$
										
$$ Z_{12} = (V_1/I_2)_(I_1 = 0) \ \ \ Z_{22} = (V_2/I_2)_(I_1 = 0) $$
										

Similarly, current I<sub>1</sub>, I<sub>2</sub> can be expressed in terms of voltage V<sub>1</sub> and V<sub>2</sub> using Y parameters.
									
										
$$ [[I_1], [I_2]] = [[Y_{11}, Y_{12}], [Y_{21}, Y_{22}]] * [[V_1] , [V_2]] \ where $$


$$ Y_{11} = \frac {I_1 / V_1}{V_2 = 0}  \ \ \  Y_{21} = \frac {I_2/V_1}{V_2 = 0} \  and $$

	
$$ Y_{12} = \frac {I_1 / V_2}{V_1 = 0}  \ \ \  Y_{22} = \frac {I_2/V_2}{V_1 = 0} $$


Similarly,  voltage V<sub>1</sub> and current I<sub>2</sub> can be expressed in terms of current I<sub>1</sub> and voltage V<sub>2</sub> using h parameters as below.
									
$$ [[V_1], [I_2]] = [[h_{11}, h_{12}], [h_{21}, h_{22}]] * [[I_1] , [V_2]] \ where $$
									
									 
$$ h_{11} = \frac {V_1/I_1}{V_2 = 0} \ \ \ h_{21} = \frac {I_2/I_1}{V_2 = 0} \ and $$

$$ h_{12} = \frac {V_1/V_2}{I_1 = 0} \ \ \ h_{22} = \frac {I_2/V_2}{I_1 = 0} $$

									
										
<p>Lastly, voltage V<sub>1</sub> and current `I<sub>1</sub> can be expressed in terms of volatge V<sub>2</sub> and current (-I<sub>2</sub>) using ABCD parameters.</p>
									
									
$$ [[V_1], [I_1]] = [[A, B], [C, D]] * [[V_2] , [-I_2]] \ where $$
	
									
$$A = (V_1/V_2)_(I_2 = 0) \ \ \ C = (I_1/V_2)_(I_2 = 0) \ and $$
	
$$ -B = (V_1/I_2)_(V_2 = 0) \ \ \ -D = (I_1/I_2)_(V_2 = 0) $$ 
	
									
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
