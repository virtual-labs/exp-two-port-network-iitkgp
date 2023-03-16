### Theory

 Consider a passive two-port (4-terminal ) network as shown in figure 1.
 
<div align="center">
<img src="images/main tp.jpg" />
	
***Fig.1 : Circuit diagram***
</div>

The voltage V<sub>1</sub>, V<sub>2</sub>  and current I<sub>1</sub>, I<sub>2</sub> can be related in terms of Z-parameters as shown below.

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
	
where,
	
$$Z_{11} = (\frac{V_1}{I_1})_{I_2 = 0} Z_{12} = (\frac {V_1}{I_2})_{I_1 = 0}$$
	
$$Z = (\frac {V_2}{I_1})_{I_2 = 0}  Z_{22} = (\frac {V_2}{I_2})_{I_1 = 0}$$

Similarly, current I<sub>1</sub> and I<sub>2</sub> can be expressed in terms of volatge V<sub>1</sub> and V<sub>2</sub> using Y parameters.

$$\begin{gather}
\begin {bmatrix}
	I_1 \\
	I_2
	\end {bmatrix} =
	\begin {bmatrix}
	Y_{11} & Y_{12} \\
	Y_{21} & Y_{22}
	\end {bmatrix} * 
	\begin {bmatrix}
	V_1 \\
	V_2
	\end {bmatrix}
	\end{gather}$$
	
where
	
$$Y_{11} = (\frac{I_1}{V_1})_{V_2 = 0} Y_{12} = (\frac {I_2}{V_2})_{V_1 = 0}$$
	
$$Y_{21} = (\frac {I_2}{V_1})_{V_2 = 0} Y_{22} = ( \frac {I_2}{V_2})_{V_1 = 0}$$

Similarly, voltage V<sub>1</sub> and current I<sub>2</sub> can be expressed in terms of current I<sub>1</sub> and voltage V<sub>2</sub> using h parameters as below.

$$\begin{gather}
\begin {bmatrix}
	V_1 \\
	I_2
	\end {bmatrix} =
	\begin {bmatrix}
	h_{11} & h_{12} \\
	h_{21} & h_{22}
	\end {bmatrix} * 
	\begin {bmatrix}
	I_1 \\
	V_2
	\end {bmatrix}
	\end{gather}$$
	
where,
	
$$h_{11} = (\frac{V_1}{I_1})_{V_2 = 0} h_{12} = (\frac {V_1}{V_2})_{I_1 = 0}$$
	
$$h_{21} = (\frac {I_2}{I_1})_{V_2 = 0} h_{22} = (\frac {I_2}{V_2})_{I_1 = 0}$$

Lastly, voltage V<sub>1</sub> and current I<sub>1</sub> can be expressed in terms of volatge V<sub>2</sub> and current (-I<sub>2</sub>) using ABCD parameters.

$$\begin{gather}
\begin {bmatrix}
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
	\end {bmatrix}
	\end{gather}$$
	
where,
	
$$A = (\frac{V_1}{V_2})_{I_2 = 0} -B = (\frac {V_1}{I_2})_{V_2 = 0}$$
	
$$C = (\frac {I_1}{V_2})_{I_2 = 0} -D = (\frac {I_1}{I_2})_{V_2 = 0}$$	
									
***Cascading Mode Circuit Diagram:***

Circuit diagram for cascading mode is shown in figure 2.

<div align="center">
<img src="images/tp main 2.JPG" />
	
***Fig.2 : Circuit Diagram for Cascading Mode***
</div>

If two networks M and N connected in cascade then the total transmission matrix T of the overall network is given by,

$$T = T_M * T_N$$

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>					
