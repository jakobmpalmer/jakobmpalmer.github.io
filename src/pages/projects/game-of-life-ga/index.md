---
path: '/game-of-life-ga'
title: 'Game of Life Genetic Algorithm'
logo: './Game_of_life_animated_glider_2.gif'
description: 'My Final Project for Machine Learning 448. 🤖 This is the the life simulation as well as the genetic algorithm used with the goal to find new infinitely propagating configurations.'
date: 'May 8th, 2020'
tags: ['Java']
live: "/placeholder"
gitlink: "https://github.com/jakobmpalmer/Game-of-Life-GA"
---

My Final Project for CS 448 Machine Learning examines Conway Game of life simulation with bots created through the implementation of a genetic algorithm. The goal is to find new, infinitely propagating configurations in the game of life and to find the most successful configuations in the process.


**Conways Game of Life** <br />
The game of life is an attempt to replicate cellular automaton. Each cell exists with a set of rules.

The game was initially created when Conway began experimenting with two-dimensional cellular atomaton in 1968. His hope was to find unpredictable cell automaton with no extreme growth, but still attaining unpredictable outcome.

**Rules:** <br />
For a cell with ... <br />
> ***<2*** neighboring cells - ***dies***, due to underpopulation <br />
> ***Two*** or ***Three*** neighboring cells - ***survives*** <br />
> ***>3*** neighboring cells - ***dies***, due to population <br />

If a dead cell has ***three*** neighbors it becomes a living cell, emulating reproduction.


**Genetic Algorithm** <br />
A <a href="https://en.wikipedia.org/wiki/Genetic_algorithm">Genetic Algorithm</a> is a specific algorithm particularly good at solving optimization problems. Inspired in part by Charles Darwin and Alan Turing, genetic algorithms are an attempt to approach real world problems with a learning methodology based around natural selection. For my project, each Bots DNA was representitive of its starting cell configuration in the Game of Life. This would look like a long array of binary values. After playing, the winning bot would have its DNA mutated slightly and randomly in hopes of creating a more successful offspring in our next iteration.
