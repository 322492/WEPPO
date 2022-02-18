USE [zad1]
GO

/****** Object:  Table [dbo].[OSOBA]    Script Date: 28.01.2022 17:26:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--wersja 1 - sekwencja
--tworzenie tabeli OSOBA
CREATE TABLE [dbo].[OSOBA](
	[ID] [int] NOT NULL,
	[Imie] [nvarchar](50) NOT NULL, -- imiê i nazwisko jako ci¹gi maksymalnie 50 znaków wydaj¹ mi siê sensowne
	[Nazwisko] [nvarchar](50) NOT NULL,
	[Plec] [char](1) NOT NULL, --identyfikatory p³ci to 'K' - kobieta i 'M' - mê¿czyzna
 CONSTRAINT [PK_OSOBA_1] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

--sekwencja
CREATE SEQUENCE [dbo].[Seq1]
	AS [int]
	START WITH 1
	INCREMENT BY 1
	MINVALUE -2147483648
	MAXVALUE 2147483647
	CACHE

--wstawianie rekordów do tabeli
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'Imie1', 'Nazwiko1', 'K')
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'Imie2', 'Nazwiko2', 'M')
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'Imie3', 'Nazwiarz', 'K')
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'fgdgdg', 'ascdssfdf', 'K')
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'WFdxvd', 'arz', 'M')
INSERT INTO OSOBA (ID, Imie, Nazwisko, Plec) VALUES (NEXT VALUE FOR dbo.Seq1, 'Imie6', 'NNN', 'K')
GO

--wersja 2 - automat
/*
CREATE TABLE [dbo].[OSOBA](
	[ID] [int] IDENTITY(1,1) NOT NULL, --tu jest zmiana!
	[Imie] [nvarchar](50) NOT NULL,
	[Nazwisko] [nvarchar](50) NOT NULL,
	[Plec] [char](1) NOT NULL,
 CONSTRAINT [PK_OSOBA_1] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

--tu nie trzeba podawaæ ID
INSERT INTO OSOBA (Imie, Nazwisko, Plec) VALUES ('Imie1', 'Nazwisko1', 'K')
INSERT INTO OSOBA (Imie, Nazwisko, Plec) VALUES ('Imie2', 'Nazwisko2', 'M')
INSERT INTO OSOBA (Imie, Nazwisko, Plec) VALUES ('Imie3', 'Nazwisko3', 'K')
GO
*/

--przyk³adowe zapytania:
SELECT * FROM OSOBA
SELECT * FROM OSOBA where Plec = 'K'
SELECT * FROM OSOBA where Nazwisko like '%arz'
SELECT * FROM OSOBA where ID <=10
SELECT * FROM OSOBA where Imie like 'Imie%' ORDER BY -ID
