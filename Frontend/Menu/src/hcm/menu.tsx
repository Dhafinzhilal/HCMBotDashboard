import { createSignal, type Component } from 'solid-js';
import styles from './menu.css';
import logoputih from '../assets/logoputih.png';
import pp from '../assets/dhafin.jpg';



const Dahsboard: Component = () => {

  const [logoimage] = createSignal(logoputih);
  const [ppsaya] = createSignal(pp);

  return (
    <div>
      <header>
          <img src={logoimage()} alt="Logo Telkom Putih" elementtiming={''} fetchpriority={'high'} />
          <div class="profile">
            <img src={ppsaya()} alt="" elementtiming={''} fetchpriority={'high'}/>
            <p>Dhafin Zhilal</p>
          </div>
          <h4>Dashboard</h4>
      </header>
      <ul class="navbar">
        <p class='menutxt'>Main Menu</p>
  <li class="active">
    <a>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24 " viewBox="0 0 15 15"><path fill="#FFFFFF" fill-rule="evenodd" d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1H2.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04Zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8Zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37Z" clip-rule="evenodd"/></svg>
    <span class='text'>Dashboard</span>
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#FFFFFF" d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2Zm0 12.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5Z"/></svg>
    <span class='text'>Pemberitahuan </span>
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5H8Z" clip-rule="evenodd"/></svg>
    <span class='text'>Pengaturan Profile </span>
    </a>
  </li>

  <div class='line'></div>

  <p class='menutxt'>Feature</p>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.3 13.2L11 12.3V7h1.5v4.4l4.5 2.5l-.7 1.3Z"/></svg>
      <span class='text'>Jadwal / Agenda </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M2 21v-2h20v2H2Zm1-3v-7h3v7H3Zm5 0V6h3v12H8Zm5 0V9h3v9h-3Zm5 0V3h3v15h-3Z"/></svg>
      <span class='text'>Performa Kekayaan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm.75-16a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75s-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.377 0-2.25-.906-2.25-1.75s.873-1.75 2.25-1.75s2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183V6Z" clip-rule="evenodd"/></svg>
      <span class='text'>Gaji Karyawan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="white" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2zm.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986L12.01 15zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7z"/></g></svg>
      <span class='text'>Konsultasi Karyawan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="white" fill-rule="evenodd"><path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/><path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></g></svg>
      <span class='text'>Absensi Karyawan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="white" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.086.692 2.493 1.075 4.026 1.176A2.996 2.996 0 0 1 9 17v-4c0-.768.289-1.47.764-2H5.009ZM10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"/></svg>
      <span class='text'>Mutasi Karyawan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4 2h6m-6 4h6m-6 4h4"/></svg>
      <span class='text'>Daftar Karyawan </span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9 8a3 3 0 1 1 6 0H9ZM7 8a5 5 0 0 1 10 0h3a1 1 0 0 1 .996 1.09l-.835 9.182A3 3 0 0 1 17.174 21H6.826a3 3 0 0 1-2.987-2.728L3.004 9.09A1 1 0 0 1 4 8h3Z" clip-rule="evenodd"/></svg>
      <span class='text'>Management Tugas Karyawan</span>
    </a>
  </li>

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18H0Zm6 0v-1.625q0-.8.438-1.463t1.237-1.162q.8-.5 1.913-.75T12 12.75q1.325 0 2.438.25t1.912.75q.8.5 1.225 1.163T18 16.375V18H6Zm13.5 0v-1.625q0-.65-.163-1.225t-.487-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18h-4.5ZM4 13q-.825 0-1.413-.588T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13Zm16 0q-.825 0-1.413-.588T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138T12 6q1.275 0 2.138.863T15 9q0 1.25-.863 2.125T12 12Z"/></svg>
      <span class='text'>Pelatihan & Pengembangan K...</span>
    </a>
  </li> 

  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zm4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z"/></svg>
      <span class='text'>Rekrutmen Karyawan</span>
    </a>
  </li>
  <div class='line'></div>
      </ul>
      <div class="content">
        <div class="list">
          <div class='box1'>
            <div class='content1'></div>
            <div class='content1'></div>
          </div>
          <div class='box2'>
            <div class='content1'></div>
          </div>
          <div class='box1'>
          <div class='content1'></div>
          <div class='content1'></div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dahsboard;